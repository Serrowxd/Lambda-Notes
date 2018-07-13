# CSS Transitions and Animations Notes

https://stackoverflow.com/questions/22340081/css-transition-eases-in-but-doesnt-ease-out?lq=1

When applying the transition to the main item, you will forgo any bugs that would otherwise cause it to not transition back correctly.

```CSS
.img-blur {
  transition: all 0.35s ease-in-out;
}

.img-blur:hover {
  -moz-filter: blur(4px);
  -webkit-filter: blur(4px);
  filter: blur(4px);
}
```

## ADD BABBEL NOTES PLEASE ~~~
