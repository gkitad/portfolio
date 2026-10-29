---
name: Anthony Jaimez Portfolio
description: The portfolio as a filled-in IT change request on a carbonless form set
colors:
  sheet-white: "#ffffff"
  sheet-canary: "#fff0a3"
  sheet-pink: "#ffd8e2"
  sheet-gold: "#f6c95a"
  print-blue: "#1f3c9c"
  ink: "#13151b"
  ink-soft: "#3a3d47"
  stamp-red: "#cf232c"
typography:
  display:
    fontFamily: "Archivo Variable, Arial Narrow, sans-serif"
    fontSize: "clamp(2.4rem, 5vw, 4.9rem)"
    fontWeight: 820
    lineHeight: 0.98
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Archivo Variable, Arial Narrow, sans-serif"
    fontSize: "clamp(1.7rem, 2.8vw, 2.5rem)"
    fontWeight: 820
    lineHeight: 1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Archivo Variable, Arial Narrow, sans-serif"
    fontSize: "clamp(1.6rem, 3vw, 2.5rem)"
    fontWeight: 800
    lineHeight: 1
  body:
    fontFamily: "Archivo Variable, Arial Narrow, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Archivo Variable, Arial Narrow, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 650
    lineHeight: 1.3
    letterSpacing: "0.025em"
rounded:
  none: "0px"
  stamp: "5px"
spacing:
  gutter: "clamp(16px, 3.5vw, 48px)"
  field: "12px 16px"
  section: "clamp(72px, 9vw, 128px)"
components:
  button-primary:
    backgroundColor: "{colors.print-blue}"
    textColor: "{colors.sheet-white}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "46px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sheet-white}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.print-blue}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "46px"
  button-ghost-hover:
    backgroundColor: "{colors.print-blue}"
    textColor: "{colors.sheet-white}"
  section-bar:
    backgroundColor: "{colors.print-blue}"
    textColor: "{colors.sheet-white}"
    typography: "{typography.title}"
---

# Design System: Anthony Jaimez Portfolio

## Overview

**Creative North Star: "The Carbon Set"**

The page is a multipart IT change request. Each section is one copy of the set, printed on its own sheet colour: the white original holds the introduction, canary holds the work, pink holds the background, goldenrod holds the contact. The form is printed in a single spot blue (ruled boxes, condensed field labels, section bars) and every entry on it is typed in near-black ink.

Density is that of a working form: fields sit edge to edge in ruled boxes, and space comes from the sheet margins and the gaps between records, not from cards floating on a ground. One red rubber stamp marks the approval step of the featured project. It is the only decoration and the only authored motion.

**Key Characteristics:**
- Whole sections change sheet colour; colour works at page scale.
- One spot colour for everything printed, one ink for everything filled in.
- Square corners and 1.5px ruled boxes everywhere.
- Real screenshots framed as attachments with their URL in the caption.

## Colors

Office carbonless paper and a single print colour.

### Primary
- **Form Print Blue** (#1f3c9c): box rules, section bars, links, buttons, navigation, focus rings and text selection.

### Tertiary
- **Stamp Red** (#cf232c): the APPROVED stamp only.

### Neutral
- **Original White** (#ffffff): the header and the introduction sheet.
- **Canary Copy** (#fff0a3): the work section.
- **Pink Copy** (#ffd8e2): the about section.
- **Goldenrod File Copy** (#f6c95a): contact and footer.
- **Typed Ink** (#13151b): all entries and body text.
- **Soft Ink** (#3a3d47): field labels, tech tags, dates and secondary detail lines.

### Named Rules
**The Blue Means Act Rule.** Form Print Blue is for the form's structure (box rules, section bars) and for anything a visitor can click. Field labels, box titles, tech tags and dates are Soft Ink or Typed Ink, so a label never looks like a link. Nothing else gets a colour except the stamp.

**The Whole Sheet Rule.** A sheet colour owns its whole section from edge to edge. Never use a sheet colour as a small accent or a card fill.

## Typography

**Display, body and label font:** Archivo Variable (with Arial Narrow), one family across its width axis.

**Character:** Wide and heavy for headlines, condensed and uppercase for the form's printed labels, normal width for typed entries. The width axis does the work a second typeface would.

### Hierarchy
- **Display** (820, clamp(2.4rem, 5vw, 4.9rem), 0.98, width 104%): the hero statement. Featured project name runs larger, up to 5.5rem at width 108%; "Let's talk." up to 6rem at width 110%.
- **Headline** (820, clamp(1.7rem, 2.8vw, 2.5rem), 1): project names in records.
- **Title** (800, clamp(1.6rem, 3vw, 2.5rem), uppercase, width 82%): section bar headings.
- **Body** (400, 1.0625rem, 1.55): paragraphs, kept under 68ch.
- **Label** (650, 0.78rem, 0.025em, uppercase, width 78%, Soft Ink): field labels. Box titles use the same voice at 0.85rem, weight 750, in Typed Ink.

### Named Rules
**The Label Is a Field Rule.** Uppercase labels name a field's value. They never sit above a heading.

## Layout

Content runs to a 1360px maximum with a fluid gutter of clamp(16px, 3.5vw, 48px). The hero is a two-column form (1.3fr / 1fr) closed by three stacked strips in the copy colours. Records use ruled internal grids: header with a meta column, body with the attachment and a workflow column, foot with description and a systems table. Below 1080px every grid becomes one column; below 560px the hero reorders so the statement and the primary action come before the fields, and the hero attachment is dropped because the featured record repeats it.

## Elevation & Depth

Flat. There are no shadows. Depth is the order of the sheets in the set and the edges of the copies showing under the front sheet.

## Shapes

Square corners on everything, including buttons, chips and attachments. Boxes are 1.5px solid print blue. The personal project is the one dashed box, set apart from the change records. The stamp is the only rounded shape (5px).

## Components

### Buttons
- **Shape:** square (0px), 46px tall (40px in records).
- **Primary:** Form Print Blue fill, white text, 700 weight at width 92%.
- **Hover / Focus:** fills with Typed Ink; 1px press on active; 3px print-blue focus ring.
- **Ghost:** 1.5px print-blue box, blue text, fills blue on hover.
- **Text:** underlined print-blue link.

### Fields
- **Style:** ruled cell, label on top in the label voice (Soft Ink), value in Typed Ink at weight 560.

### Section bar
- **Style:** full-bleed print-blue band with the section title in white, uppercase condensed, and an optional note on the right.

### Attachment
- **Style:** the screenshot inside a ruled frame on white, caption strip with "Attachment" and the live URL.

### Approval stamp (signature)
- Red 3px outline, uppercase condensed 850 weight, rotated -9deg, multiply blend. Visible by default; when it starts out of view and motion is allowed, it presses in once (scale 1.9 to 1, 460ms, exponential ease-out).

### Navigation
- Plain print-blue links in the white header; the current section fills print blue. On phones the links take the full row.

## Do's and Don'ts

### Do:
- **Do** give every new section its own sheet colour from the set and a print-blue section bar.
- **Do** frame real screenshots as attachments with their URL.
- **Do** keep text in ink and save the blue for structure and actions.

### Don't:
- **Don't** add shadows, gradients or rounded cards.
- **Don't** put a label above a heading.
- **Don't** use the stamp more than once per page or for anything other than an approval.
- **Don't** use the em dash or en dash anywhere in the copy.
