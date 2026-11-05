# Hallmark check

Hallmark 0 FAIL, 0 REFLEX, 3 WARN, 2 waived, 1 notes · render: ran · lang: uk

render tier: 5 screenshots in C:\Users\aser3\Desktop\резалт\.hallmark\shots (1280x800, 1440x900, 1920x1080 folds; 1440 and 375 full pages)

| Grade | Gate | Where | Evidence | Fix |
|---|---|---|---|---|
| WARN | 28a | site\src\components\sections\Komanda.astro:15 | lazy-loaded first image (likely LCP) | fetchpriority=high on the LCP element |
| WARN | 49 | site\src\components\Channels.astro:8 | long clickable label "Подзвонити {contacts.phoneText}" without nowrap | Shorten the label or set nowrap |
| WARN | F4 | site\src\styles\site.css:157 | 2 filled primary-button recipes: .btn--call + .sit__btn[aria-expanded="true"] .sit__… | One filled primary per page; demote the rest to outline/quiet variants |

RESULT: PASS
