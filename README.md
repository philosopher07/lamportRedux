Questions that may help
===

Programming in general;:
---

"Why isn't this working?"
ID: what "this" is and what "working" looks like.



React+Redux specific:
---

"From where is the data I'm expecting coming?"
if coming from above in the App's hierarchy, check that props are passed correctly to this component

"Will this data be needed in any other components?"
if needed in a component below, pass down via props
if needed in a sibling or above, consider a dispatch

