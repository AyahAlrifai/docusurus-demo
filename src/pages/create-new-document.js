import React, { useState } from 'react';
import Layout from '@theme/Layout';
import MonacoEditor from '@uiw/react-monacoeditor';
import styles from '../css/style.module.css';
import ReactMarkdown from 'react-markdown';

export default function SNewDocumentql() {

  const initValue = `Basic Syntax
  These are the elements outlined in John Gruber’s original design document. All Markdown applications support these elements.
  
  Element	Markdown Syntax
  Heading	
  # H1
  ## H2
  ### H3
  Bold	**bold text**
  Italic	*italicized text*
  Blockquote	> blockquote
  Ordered List	
  1. First item
  2. Second item
  3. Third item
  Unordered List	
  - First item
  - Second item
  - Third item
  Code	\`code\`
  Horizontal Rule	
  ---
  Link	[title](https://www.example.com)
  Image	![alt text](image.jpg)`;

  const [value, setValue] = useState(initValue);

  const options = {
    "acceptSuggestionOnCommitCharacter": true,
    "acceptSuggestionOnEnter": "on",
    "accessibilitySupport": "auto",
    "autoIndent": true,
    "automaticLayout": true,
    "codeLens": true,
    "colorDecorators": true,
    "contextmenu": true,
    "cursorBlinking": "blink",
    "cursorSmoothCaretAnimation": false,
    "cursorStyle": "line",
    "disableLayerHinting": false,
    "disableMonospaceOptimizations": false,
    "dragAndDrop": true,
    "fixedOverflowWidgets": false,
    "folding": true,
    "foldingStrategy": "auto",
    "fontLigatures": false,
    "formatOnPaste": true,
    "formatOnType": true,
    "hideCursorInOverviewRuler": false,
    "highlightActiveIndentGuide": true,
    "links": true,
    "mouseWheelZoom": false,
    "multiCursorMergeOverlapping": true,
    "multiCursorModifier": "alt",
    "overviewRulerBorder": true,
    "overviewRulerLanes": 2,
    "quickSuggestions": true,
    "quickSuggestionsDelay": 100,
    "readOnly": false,
    "renderControlCharacters": false,
    "renderFinalNewline": true,
    "renderIndentGuides": true,
    "renderLineHighlight": "all",
    "renderWhitespace": "none",
    "revealHorizontalRightPadding": 30,
    "roundedSelection": true,
    "rulers": [],
    "scrollBeyondLastColumn": 5,
    "scrollBeyondLastLine": true,
    "selectOnLineNumbers": true,
    "selectionClipboard": true,
    "selectionHighlight": true,
    "showFoldingControls": "mouseover",
    "smoothScrolling": false,
    "suggestOnTriggerCharacters": true,
    "wordBasedSuggestions": true,
    "wordSeparators": "~!@#$%^&*()-=+[{]}|;:'\",.<>/?",
    "wordWrap": "off",
    "wordWrapBreakAfterCharacters": "\t})]?|&,;",
    "wordWrapBreakBeforeCharacters": "{([+",
    "wordWrapBreakObtrusiveCharacters": ".",
    "wordWrapColumn": 80,
    "wordWrapMinified": true,
    "wrappingIndent": "none",
    // "theme": 'vs-dark',
  };

  return (
    <Layout>
      <div className={styles.createNewDoc}>
        <div className={styles.markdown}>
          <div className={styles.markdownEditor}>
            <MonacoEditor
              language="markdown"
              value={initValue}
              className={styles.monacoEditor}
              options={options}
              onChange={(newValue) => {
                setValue(newValue);
              }}
            />
          </div>
          <div className={styles.markdownViewer}>
            <ReactMarkdown children={value} />
          </div>

        </div>
        <button type='submit' className={styles.btn + " " + styles.primaryBtn}>create</button>
      </div>
    </Layout>
  );
}