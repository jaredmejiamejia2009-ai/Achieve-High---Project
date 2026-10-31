"use strict";

const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const PORT = 3000;
const HOST = "127.0.0.1";

const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".ico": "image/x-icon"
};

const server = http.createServer((req, res) => {
    if (req.method !== "GET" && req.method !== "HEAD") {
        res.writeHead(405, {
            "Content-Type": "text/plain; charset=utf-8",
            "Allow": "GET, HEAD"
        });
        res.end("Method not allowed");
        return;
    }

    let pathname;

    try {
        pathname = decodeURIComponent(
            new URL(req.url, `http://${HOST}:${PORT}`).pathname
        );
    } catch {
        res.writeHead(400);
        res.end("Invalid URL");
        return;
    }

    // Only allow requests for the website's known files.
    const allowedFiles = {
        "/": "index.html",
        "/index.html": "index.html",
        "/app.js": "app.js",
        "/style.css": "style.css"
    };

    const filename = allowedFiles[pathname];

    if (!filename) {
        res.writeHead(404, {
            "Content-Type": "text/plain; charset=utf-8"
        });
        res.end("404 - File not found");
        return;
    }

    const filePath = path.join(PUBLIC_DIR, filename);

    fs.readFile(filePath, (error, content) => {
        if (error) {
            console.error(`Could not read ${filename}:`, error.message);

            const status = error.code === "ENOENT" ? 404 : 500;

            res.writeHead(status, {
                "Content-Type": "text/plain; charset=utf-8"
            });

            res.end(
                status === 404
                    ? `Missing file: ${filename}`
                    : "Internal server error"
            );

            return;
        }

        res.writeHead(200, {
            "Content-Type":
                MIME_TYPES[path.extname(filename)] ||
                "application/octet-stream",
            "X-Content-Type-Options": "nosniff",
            "Cache-Control": "no-cache"
        });

        res.end(req.method === "HEAD" ? undefined : content);
    });
});

server.on("error", (error) => {
    if (error.code === "EADDRINUSE") {
        console.error(
            `Port ${PORT} is already in use. Stop the other server or choose another port.`
        );
    } else {
        console.error("Server error:", error);
    }
});

server.listen(PORT, HOST, () => {
    console.log("Level Up Student server is running!");
    console.log(`Open http://${HOST}:${PORT}/ in your browser.`);
});
