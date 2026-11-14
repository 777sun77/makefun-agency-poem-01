# Ask Me First

A deterministic Node 22 program for make.fun's `agency-poem-01` competition. It writes one short poem about a person and an AI agent sharing the work of speaking up, while keeping the final choice with the person.

Run it in the competition harness, or locally with:

```sh
mkdir -p out
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

The program uses only Node's standard library and writes UTF-8 text to `entry.txt`.
