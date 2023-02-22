---
sidebar_position: 2
---

# Extended Syntax

| Element |	Markdown Syntax |
| ----------- | ----------- |
| Footnote	| `Here's a sentence with a footnote. [^1] [^1]: This is the footnote.`|
| Heading ID	| `### My Great Heading {#custom-id}` |
| Definition List |	`term : definition` |
| Strikethrough |	`~~The world is flat.~~` |
| Task List	| `- [x] Write the press release - [ ] Update the website - [ ] Contact the media` |
| Emoji |	`That is so funny! :joy:` |
| Highlight |	`I need to highlight these ==very important words==. or I need to highlight these <mark>very important words</mark>.`|
| Subscript	| `H~2~O` |
| Superscript |	`X^2^` |
| Fenced Code Block |	```{  "firstName": "John",  "lastName": "Smith",  "age": 25}```|



| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

---

```
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```
---

- Here's a sentence with a footnote 1. [^1]
- Here's a sentence with a footnote 2. [^2]
- Here's a sentence with a footnote 3. [^3]

[^1]: This is the footnote 1.
[^2]: This is the footnote 2.
[^3]: This is the footnote 3.

---

### My Great Heading {#custom-id}

---

<dl>
  <dt>First Term</dt>
  <dd>This is the definition of the first term.</dd>
  <dt>Second Term</dt>
  <dd>This is one definition of the second term. </dd>
  <dd>This is another definition of the second term.</dd>
</dl>

---

~~The world is flat.~~

---

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

---

That is so funny! :joy:

---

I need to highlight these 
I need to highlight these <mark>very important words</mark>.

---

H~2~O

---

X^2^
