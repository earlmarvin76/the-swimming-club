# The Swimming Club

## Project purpose and target audience

The Swimming Club website was created to address a simple but important problem: people who want to join a friendly, active community often need an easy way to understand what the club offers, when sessions take place, and how to get involved. The site gives new and returning users a central place to discover the club, view its activities, and sign up without needing to contact a club member directly.

The target audience includes:

- beginners who want a welcoming environment to start swimming
- active adults looking for regular fitness and social opportunities
- families and recreational swimmers interested in group sessions
- people living in or near Hull and Doncaster who want local club information

The value of the website is that it makes the club feel approachable, organised and transparent. It helps users quickly understand the benefits of swimming, browse visual content, and take action by joining the club.

## User stories

The features of the site were designed around user needs. The following user stories explain the reasoning behind the structure and functionality:

- As a user, I want to understand the benefits of swimming so that I can see why joining the club is worthwhile.
  - This is addressed by the home page's reason section, which explains health, strength and social benefits.

- As a user, I want to see when the club meets so that I can plan my attendance.
  - This is addressed by the schedule information and meetup section on the home page.

- As a user, I want to view club activities visually so that I can get a sense of the atmosphere and membership experience.
  - This is addressed by the gallery page, which showcases images of swimmers and club sessions.

- As a user, I want to sign up easily so that I can join the club quickly.
  - This is addressed by the sign-up form, which collects key member details and validates important fields.

- As a user, I want to navigate the site on mobile devices so that I can access information while on the go.
  - This is addressed by the responsive layout and mobile navigation menu.

## UX design

### Wireframes

The project was planned around a simple three-page structure using a consistent brand identity and clear hierarchy. A rough wireframe concept is shown below.

```text
HOME PAGE
--------------------------------------------------
| Logo | Home | Gallery | Sign Up               |
--------------------------------------------------
| Hero image + club title / location             |
| Why swim with us?                              |
| Benefit cards                                   |
| Meetup schedule                                 |
| Footer with links + map + social icons          |
--------------------------------------------------

GALLERY PAGE
--------------------------------------------------
| Logo | Home | Gallery | Sign Up               |
--------------------------------------------------
| Page title                                     |
| Masonry-style grid of swimming photos           |
| Footer with links + map + socials               |
--------------------------------------------------

SIGN-UP PAGE
--------------------------------------------------
| Logo | Home | Gallery | Sign Up               |
--------------------------------------------------
| Form with name, email and swimming preference  |
| Submit button                                  |
| Footer with links + map + socials               |
--------------------------------------------------
```

### Colour choices

The site uses a calm, sporty palette that reflects water and fitness:

- white for the main background and clean navigation
- dark charcoal for text and contrast
- soft red/coral accent colour for emphasis and hero overlay
- dark green/olive for action buttons and call-to-action styling

These colours were chosen to feel active, approachable, and visually clean while still maintaining contrast for readability.

### Typography

The design uses:

- Oswald for headings to create a bold, energetic sports aesthetic
- Lato for body text to maintain readability and modern clarity

This pairing helps the site feel professional and sporty without becoming too heavy or difficult to read.

### Layout decisions

The layout is intentionally simple and user-focused:

- a fixed header with clear navigation
- a large hero section to establish identity immediately
- benefit cards for quick scanning of the value proposition
- gallery content placed in a responsive grid for visual storytelling
- sign-up form centralised for strong conversion focus

### Accessibility considerations

Accessibility was considered throughout the project:

- semantic HTML structure using headings, sections and landmarks
- visible focus states and clear navigation labels
- high contrast between text and background in most areas
- descriptive alt text on major images
- form labels are associated with inputs
- responsive layout improves usability across screen sizes

### Reasoning behind the design choices

The design aims to feel welcoming and active rather than corporate. The combination of strong imagery, bold headers, a clean layout and calm supporting colours helps communicate trust and community without overwhelming users.

## Features

### Existing features

- Responsive navigation menu for mobile and desktop users
- Hero banner with strong branding and club identity
- Benefits section explaining physical and mental health value
- Weekly session and meetup summary
- Gallery page with swimming-related imagery
- Sign-up form with required field validation
- Footer with social links, site navigation and embedded map
- JavaScript for mobile menu state and form validation

### How the features work

- The navigation menu collapses into a mobile-friendly toggle on smaller screens
- The hero section uses a background image and overlay to make the club branding stand out
- The gallery is displayed using CSS column layout for a modern, responsive image grid
- The sign-up form checks required fields before submission and prevents empty form data being sent
- The footer includes contact-friendly information, navigation and social icons for additional engagement

### Features for future implementation

Possible future enhancements include:

- a real booking or membership database
- a contact form connected to email or a CMS
- online event calendar with registration links
- user login and member dashboard
- additional filters or categories in the gallery
- animation enhancements for improved interaction

## Manual testing

Manual testing was completed locally by previewing the site in a browser and checking that core functionality worked as expected.

| Test area | Test performed | Expected result | Actual result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Navigation | Clicked Home, Gallery and Sign Up links | Each page loads correctly | Links worked as expected | Pass |
| Internal links | Verified links between pages | No broken internal navigation | Internal pages connected correctly | Pass |
| External links | Checked social media and map links | Links open correctly in a new tab or relevant destination | Social links were present and configured as external links | Pass |
| Sign-up form | Submitted empty form | Validation alert should appear | Required-field validation triggered as intended | Pass |
| Form fields | Entered valid information | Form should accept values and submit | Field inputs behaved correctly in the static demo form | Pass |
| Buttons | Checked join button and nav actions | Buttons respond and maintain visual styling | Buttons rendered and functioned appropriately | Pass |
| Responsiveness | Resized browser to mobile and tablet widths | Layout changes without overlap or clipping | Layout adjusted responsively | Pass |
| Content layout | Reviewed each section on the page | Sections remain readable and aligned | Layout matched the intended structure | Pass |

## Responsiveness testing

The website was reviewed across a range of screen sizes to make sure the layout remained usable on different devices.

### Device and browser review

- Mobile width: tested using a narrow browser window and responsive layout adjustments
- Tablet width: checked spacing, image sizing and readability
- Desktop width: verified full content alignment and navigation layout
- Browser review: Chrome/Chromium-based browser and browser developer tools were used for responsiveness testing

### Observations

- The navigation collapses cleanly on smaller screens
- Content stacks sensibly on narrow screens
- Images scale and maintain aspect ratio
- Forms remain readable and usable at smaller sizes
- The footer content reorganises to maintain readability

## HTML validation

The deployed home page was checked with the [W3C Nu HTML Checker](https://validator.w3.org/nu/):

- Tested URL: https://earlmarvin76.github.io/the-swimming-club/index.html
- Result: no errors or warnings were reported.
- Evidence: [HTML validation screenshot](docs/validation/html-validation.png)

Evidence status:

![HTML validation result](docs/validation/html-validation.png)

The screenshot records the result for the deployed home page. The gallery and sign-up pages should also be submitted individually if a complete multi-page validation record is required.

## CSS validation

The deployed stylesheet was checked with the [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/):

- Tested URL: https://earlmarvin76.github.io/the-swimming-club/assets/css/style.css
- Profile: CSS Level 3 + SVG
- Result: no CSS errors were found; the validator reported three compatibility warnings for `break-inside` in screen media.
- Evidence: [CSS validation screenshot](docs/validation/css-validation.png)

Evidence status:

![CSS validation result](docs/validation/css-validation.png)

The screenshot records the result for the deployed stylesheet.

## Accessibility testing

Accessibility checks were considered as part of the design and implementation process.

### Checklist

- keyboard navigation tested through links and form controls
- labels are present for form inputs
- colour contrast reviewed for readability between text and background
- alt text included for the main imagery
- semantic headings used to structure page content
- responsive design helps users with different device sizes and assistive needs

### Notes

The website is generally accessible for a static front-end project, but additional enhancements could improve accessibility further, such as stronger focus styling, more detailed ARIA labelling, and testing with screen readers.

## Bugs and fixes

### Issues encountered

1. Mobile navigation needed to close after a user selected a page.
   - Fix: JavaScript was used to remove the active state and collapse the nav toggle after a navigation click.

2. Empty form submission risk existed on the sign-up page.
   - Fix: JavaScript validation was added to check required fields before submission.

3. Responsive design had to be carefully managed for narrower screens.
   - Fix: media queries were used to adjust layout, spacing and image sizing.

### Remaining issues

- This is a static front-end project, so no server-side form processing is implemented
- The live social media links are placeholders and may be updated when official club profiles exist
- Some validation requirements should be re-run using the W3C official tools before final deployment

## Deployment

### Live website link

The project is currently set up as a static website and can be deployed to GitHub Pages, Netlify or another static hosting service.

Live website URL: https://earlmarvin76.github.io/the-swimming-club

### Deployment instructions

To deploy this project as a static site:

1. Push the project to a GitHub repository.
2. Open the repository on GitHub.
3. Go to Settings > Pages.
4. Select the main branch as the source.
5. Save the settings and wait for GitHub Pages to publish the site.
6. Copy the generated URL and update this section with the live site link.

Alternatively, the project can be deployed on Netlify by uploading the project folder or connecting the repository.

## Credits and attribution
- This README was adapted from the README for my travel-agency project, with the content changed for The Swimming Club.

### Reused project code and development assistance

- The header, navigation, footer and responsive layout patterns were adapted from my previous Love Running project. The related comments are in `index.html`.
- The footer and map layout were adapted from my previous Travel Agency project. The related comment is in `index.html`.
- GitHub Copilot was used for development suggestions, code completion and help with documentation. The final code was reviewed and adapted for this project.
- No Bootstrap stylesheet or Bootstrap JavaScript is loaded by this project. The site uses its own CSS in `assets/css/style.css` and JavaScript in `assets/js/script.js`.

### External runtime resources

- [Google Fonts](https://fonts.google.com/) supplies the Lato and Oswald fonts imported in `assets/css/style.css`.
- [Font Awesome](https://fontawesome.com/) supplies the navigation, social and decorative icons through the kit loaded in `index.html`, `gallery.html` and `signup.html`.
- [OpenStreetMap](https://www.openstreetmap.org/) supplies the embedded map shown in the footer of all three HTML pages.
- [Code Institute FormDump](https://formdump.codeinstitute.net/) is the demonstration form endpoint used by the sign-up form in `signup.html`. It does not provide permanent membership storage.

### External images and links

- Swimming images with `unsplash` in their filenames were sourced from [Unsplash](https://unsplash.com/) and are used in the home page and gallery.
- Image files with `istockphoto` in their filenames were sourced from [iStock](https://www.istockphoto.com/). Their filenames are retained in `assets/css/images/` for attribution reference.
- The Facebook, Twitter, YouTube and Instagram URLs are placeholder external links in the footers. They should be replaced with official club profile URLs when available.

### Development and validation resources

- [W3C Markup Validation Service](https://validator.w3.org/) is recommended for HTML validation.
- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) is recommended for CSS validation.

All external resources and reused code were included for educational and project purposes. Where an original source URL is not recorded in the local project files, the asset filename or project reference identifies the source as accurately as possible.

## Reflection and evaluation

### What went well

- The website has a clear structure and simple navigation
- The design is visually consistent across each page
- The project effectively communicates the club's purpose and emotional appeal
- The responsive styling works well across different screen sizes

### What was challenging

- Balancing a design that looked modern while still being easy to read and navigate
- Ensuring the layout remained responsive without breaking the grid or image proportions
- Implementing validation in a lightweight way for a static site

### What changed from the original plan

The project remained close to its original concept, but the final implementation focused more strongly on mobile responsiveness and user experience clarity. The sign-up form and navigation behaviour were refined to better serve real users.

### What I learned

- how to structure a multi-page static website with consistent branding
- how to build responsive layouts using CSS media queries
- how to validate user input with JavaScript
- how to improve accessibility and readability through thoughtful design choices

### What I would improve with more time

- add a real backend and database for sign-ups
- create a richer event and booking system
- improve accessibility testing with more assistive technology review
- perform full W3C HTML and CSS validation before release
- add more detailed animations and enhanced content sections

## License

This project is licensed under the MIT License. See [LICENSE.md](LICENSE.md) for details.

## Project structure

```text
the-swimming-club/
├── index.html
├── gallery.html
├── signup.html
├── README.md
├── LICENSE.md
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   └── images/
│   └── js/
│       └── script.js
```

## Local setup

To run the project locally:

```bash
cd the-swimming-club
python3 -m http.server 8000
```

Then open this in a browser:

```text
http://localhost:8000
```
## Deployment
The live deployed site can be accessed [here](https://earlmarvin76.github.io/the-swimming-club/)

## Repository URL
The repository URL can be accessed [here](https://github.com/earlmarvin76/the-swimming-club)
