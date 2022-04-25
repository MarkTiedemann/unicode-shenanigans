@echo off

if not exist third_party (
	md third_party
)

if not exist third_party\es2022.intl.d.ts (
	curl -Lo third_party\es2022.intl.d.ts https://raw.githubusercontent.com/microsoft/TypeScript/03b26582f126d7505800add06eab1aebd1b5e764/src/lib/es2022.intl.d.ts
)

if not exist third_party\confusables.txt (
	curl -Lo third_party\confusables.txt https://www.unicode.org/Public/security/latest/confusables.txt
)

if not exist third_party\invisible-characters.json (
	curl -Lo third_party\invisible-characters.json https://raw.githubusercontent.com/hediet/vscode-unicode-data/main/out/invisible-characters.json
)

for /f %%f in ('dir /b *v*.ts') do (
	echo %%f
	deno run --config=deno.json --allow-read=third_party %%f
)
