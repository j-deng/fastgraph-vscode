// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { decorators } from "./decorators";

const decoratorDescriptions = Object.fromEntries(
  decorators.map((item) => [item.name, item.description])
);

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "fastgraph-vscode" is now active!');

  const decoratorHoverProvider = vscode.languages.registerHoverProvider(
    { language: "prisma" },
    {
      provideHover(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken
      ) {
        const linePrefix = document
          .lineAt(position)
          .text.substring(0, position.character);
        if (/^ *\/\/\/ @[^\s]*$/.test(linePrefix)) {
          const match = /^ *\/\/\/ *@([^\s^\n]+)/.exec(
            document.lineAt(position).text
          );
          const decoratorName = match && match[1];
          if (decoratorName && decoratorDescriptions[decoratorName]) {
            return new vscode.Hover(decoratorDescriptions[decoratorName] || "");
          }
        }
      },
    }
  );

  const decoratorCompletionProvider =
    vscode.languages.registerCompletionItemProvider(
      { language: "prisma" },
      {
        provideCompletionItems(
          document: vscode.TextDocument,
          position: vscode.Position,
          token: vscode.CancellationToken,
          context: vscode.CompletionContext
        ) {
          const linePrefix = document
            .lineAt(position)
            .text.substring(0, position.character);
          const withSlash = linePrefix.trim().startsWith("///");
          const withAt = linePrefix.trim().startsWith("@");
          if (!withSlash && !withAt) {
            return;
          }
          return decorators.map(({ name, description }) => {
            const completionItem = new vscode.CompletionItem(`@${name}`);
            completionItem.documentation = new vscode.MarkdownString(
              description || ""
            );
            if (!withSlash) {
              completionItem.insertText = new vscode.SnippetString(
                `/// @${name}`
              );
            }
            return completionItem;
          });
        },
      }
    );

  context.subscriptions.push(
    decoratorHoverProvider,
    decoratorCompletionProvider
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
