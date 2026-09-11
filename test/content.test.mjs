import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("content has a title and tagline", async () => {
  const content = JSON.parse(await readFile("src/content.json", "utf8"));
  assert.ok(content.title.length > 0);
  assert.ok(content.tagline.length > 0);
});

