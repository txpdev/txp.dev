import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the TXP.DEV portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>TXP\.DEV — Tibo X Perol<\/title>/i);
  assert.match(html, /I build/);
  assert.match(html, /applied AI/);
  assert.match(html, /I taught convnets to detect earthquakes before AI was cool/);
  assert.match(html, /Parfait Health/);
  assert.match(html, /OneSuite/);
  assert.match(html, /StormForge/);
  assert.match(html, /continuously rightsizes Kubernetes workloads/);
  assert.match(html, /ConvNetQuake/);
  assert.match(html, /Founding engineer · Chief AI Officer/);
  assert.match(html, /Head of Engineering and AI/);
  assert.match(html, /An AI workspace for performance teams/);
  assert.match(html, /Acquired by CloudBolt/);
  assert.match(html, /Building now/);
  assert.match(html, /Open source/);
  assert.match(html, /Founder · Engineer · Scientist/);
  assert.match(html, /C:\\TXP\\WORKBENCH/);
  assert.match(html, /https:\/\/www\.linkedin\.com\/in\/thibautperol/);
  assert.match(html, /https:\/\/github\.com\/txpdev/);
  assert.match(html, /https:\/\/x\.com\/txpdev/);
  assert.match(html, /https:\/\/onesuite\.performics\.com\/login/);
  assert.match(html, /https:\/\/parfait-health\.dev\//);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});
