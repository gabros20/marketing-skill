# Installation

Install the `marketing` runtime pack from the independently versioned
`gabros20/marketing-skill` repository.

## Prerequisites

- An Agent Skills-compatible client.
- No skill-specific credentials or tools are required. `marketing` is tool-agnostic; it names which
  class of platform a job touches (a search console, an email service provider, an ad platform, an
  app-store listing console) and recommends re-verifying current platform limits, thresholds, and
  guidelines at analysis time (anti-staleness), but ships no keys and requires no fixed toolchain.

## Install with skills.sh

```bash
npx skills add gabros20/marketing-skill
```

## Clone and install

```bash
git clone https://github.com/gabros20/marketing-skill.git
cd marketing-skill
./install.sh codex
```

Available targets:

| Argument | Destination |
|---|---|
| `codex` | `${CODEX_HOME:-$HOME/.codex}/skills/marketing/` |
| `agents` | `~/.agents/skills/marketing/` |
| `claude` | `~/.claude/skills/marketing/` |
| `cursor` | `~/.cursor/skills/marketing/` |
| `antigravity` | Gemini IDE and Antigravity CLI skill paths |
| `opencode` | `~/.config/opencode/skills/marketing/` |
| `grok` | `~/.grok/skills/marketing/` |
| `hermes` | `~/.hermes/skills/marketing/` |
| `all` | Claude, Codex, and the cross-agent path |

The installer stages a complete copy before replacing an existing installation. If replacement
fails, it restores the previous copy.

## Verify

Start a new client session and use the client's supported invocation form:

- Codex: `$marketing`
- Slash-command clients: `/marketing`
- Other clients: an `@` mention, skill tool, or natural-language trigger

For Codex, verify the installed files directly:

```bash
test -f "${CODEX_HOME:-$HOME/.codex}/skills/marketing/SKILL.md"
```

## Update

```bash
cd marketing-skill
git pull --ff-only
./install.sh codex
```

Review `CHANGELOG.md` and GitHub Releases for version history. Version metadata intentionally stays
outside runtime `SKILL.md`.

## Uninstall

```bash
rm -rf "${CODEX_HOME:-$HOME/.codex}/skills/marketing"
```
