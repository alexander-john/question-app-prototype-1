const express = require("express");
const fs = require("fs/promises");
const { exec } = require("child_process");
const util = require("util");
const Prompt = require("../models/Prompt");

const execAsync = util.promisify(exec);
const router = express.Router();

router.post("/", async (req, res) => {
    const { code, promptId } = req.body;

    try {
        const prompt = await Prompt.findById(promptId);
        if (!prompt) return res.status(404).json({ error: "Prompt not found" });

        // Build test runner file
        const testRunner = `
      ${code}
      const results = [];
      const fn = ${prompt.functionName};

      const testCases = ${JSON.stringify(prompt.testCases)};
      for (const test of testCases) {
        const result = fn(...test.input);
        results.push({
          input: test.input,
          expected: test.expectedOutput,
          result,
          passed: result === test.expectedOutput
        });
      }
      console.log(JSON.stringify({ results }));
    `;

        await fs.writeFile("temp/user-code.js", testRunner);

        // Run Docker container with user-code.js
        const { stdout, stderr } = await execAsync(
            `docker run --rm -v ${process.cwd()}/temp:/usr/src/app -w /usr/src/app node:18-alpine node user-code.js`
        );

        const output = JSON.parse(stdout.trim());
        res.json(output);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: "Evaluation failed",
            details: err.message,
        });
    }
});

module.exports = router;
