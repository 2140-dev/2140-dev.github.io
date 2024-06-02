import dayjs from 'dayjs';
import Josibake from '../images/josibake.jpg';
import Ruben from '../images/ruben.jpg';

export const MENU_ITEMS = [
  {
    text: 'About',
    anchor: 'about',
  },
  {
    text: 'Team',
    anchor: 'team',
  },
  {
    text: 'Get involved',
    anchor: 'getInvolved',
  },
];

export const HERO_WORDING = {
  title: `Supporting Bitcoin<br /> to 2140 and beyond`,
  blurb: `2140 is a European non-profit organization (NGO) dedicated to supporting Bitcoin research and development. Our mission is to provide protocol veterans with long-term stability through employment in our Amsterdam office and to onboard aspiring contributors.`,
  button: `Read more`,
};

export const ABOUT_WORDING = {
  eyebrow: '01 — About',
  title: `Building <s>projects</s> careers`,
  blurb: `At 2140, our focus is the long-term security, resilience and stability of the Bitcoin network; our employment opportunities and fellowship programs are not just about funding developers. We want contributors to build a career within the space and focus on large-scale, multi-year initiatives.`,
  sections: [
    {
      eyebrow: 'What we offer',
      subtitle: `Working on Bitcoin is hard enough, making it your full-time job shouldn't be`,
      content: `<i>Full-time employment.</i> Long-time contributors are the back bone of the Bitcoing network; being in the space for years, they acquired the technical knowledge and expertise crucial to the success of the ecosystem. 2140 provides them the security, tools and resources they need to focus on long-term projects and the betterment of the Bitcoin network.
      <br /><br /><i>One-year fellowship.</i> Becoming an open-source contributor can be an intimidating and challenging task. Our 1-year fellowship program is dedicated to newcomers aspiring to become full-time contributors and helps them through this transition by offering mentorship, guidance and first-hand experience within the Bitcoin ecostystem.`,
    },
    {
      eyebrow: 'Why we care',
      subtitle: `Ipsum dolorum definitionem mel ea`,
      content: `Ipsum dolorum definitionem mel ea, eros blandit honestatis sea at. Mel te solet civibus, ne putent aliquid recusabo sed. Sint constituam qui et, est an magna invidunt. Labore suscipiantur pro in, id vide summo errem nam. Ipsum dolorum definitionem mel ea, eros blandit honestatis sea at. Mel te solet civibus, ne putent aliquid recusabo sed. Sint constituam qui et, est an magna invidunt. Labore suscipiantur pro in, id vide summo errem nam.`,
    },
  ],
};

export const TEAM_WORDING = {
  eyebrow: '02 — Team',
  title: 'Meet Our Contributors',
  content: `We are a mix of long-term contributors, researchers, and new faces all united by a common goal: to to support Bitcoin until the last subsidy is mined, and beyond.`,
  team: [
    {
      name: 'josibake',
      role: 'Bitcoin Core contributor',
      twitter: 'https://twitter.com/josibake?lang=en',
      github: 'https://github.com/josibake',
      image: Josibake,
    },
    {
      name: 'RubenSomsen',
      role: 'Bitcoin Sorcerer',
      twitter: 'https://twitter.com/SomsenRuben',
      github: 'https://gist.github.com/RubenSomsen',
      image: Ruben,
    },
  ],
};

export const DONATE_WORDING = {
  eyebrow: '3 — Donate',
  title: 'Get involved in our mission',
  donate: {
    eyebrow: '3.1 — Donate',
    title: `Support the Future of Bitcoin`,
    content: `2140 is not a business: we are a non-profit with 100% of donations being used to provide long-term support to open source contributors. Our aim is to do this sustainably, which is only possible with community support.`,
    button: {
      title: 'Support our mission',
      text: 'Join us in empowering this vital work',
    },
  },
  contact: {
    eyebrow: '3.2 — Contact',
    title: `Get in touch — At 2140, we're always eager to connect`,
    content: `Whether you're a developer with insights to share, a potential collaborator, or simply curious about our work, we'd love to hear from you!`,
  },
};
