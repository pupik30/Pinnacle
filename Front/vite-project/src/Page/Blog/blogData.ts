import { Photo } from "../../file.ts";

export interface blogBlockType {
  type: 'heading' | 'paragraph' | 'list';
  text?: string;
  items?: string[];
}

export interface blogPostType {
  id: number;
  title: string;
  tag: string;
  description: string;
  date_text: string;
  img: string;
  author_name: string;
  author_avatar: string;
  read_time: string;
  table_of_contents: string[];
  body: blogBlockType[];
}

export const blogPosts: blogPostType[] = [
  {
    id: 1,
    title: 'The Art of Building a Timeless Home',
    tag: 'Home Design',
    description: "A timeless home is not about following trends. It is about proportion, light and materials that age gracefully - and a plan that still works when life changes.",
    date_text: 'June 12, 2024',
    img: Photo.Card_image,
    author_name: 'John Doe',
    author_avatar: Photo.Member1,
    read_time: '6 min read',
    table_of_contents: [
      'Start with the site',
      'Design for light',
      'Choose materials that age well',
      'Plan for change',
    ],
    body: [
      {
        type: 'paragraph',
        text: "Every home we design starts with a simple question: how will this space feel in twenty years? Trends move quickly, but the things that make a house feel right - proportion, daylight and honest materials - do not.",
      },
      {
        type: 'heading',
        text: 'Start with the site',
      },
      {
        type: 'paragraph',
        text: "Before a single line is drawn, we spend time on the plot. Where does the sun rise? Which views are worth protecting? How does the street sound in the evening? The answers shape the plan far more than any mood board.",
      },
      {
        type: 'heading',
        text: 'Design for light',
      },
      {
        type: 'paragraph',
        text: "Natural light is the cheapest and most effective material we work with. Deep rooms, small windows and dark corners are expensive to fix later, so we plan daylight first and furniture second.",
      },
      {
        type: 'heading',
        text: 'Choose materials that age well',
      },
      {
        type: 'list',
        items: [
          'Solid timber that develops a patina instead of wearing out',
          'Natural stone that can be repaired rather than replaced',
          'Lime-based finishes that let walls breathe',
        ],
      },
      {
        type: 'paragraph',
        text: "Timeless design is also flexible design. Rooms that can change purpose, storage that hides clutter and services that are easy to reach will keep a home useful long after the finishes have been updated.",
      },
    ],
  },
  {
    id: 2,
    title: 'The Future of Sustainable Construction',
    tag: 'Sustainability',
    description: 'Sustainability is no longer a checkbox at the end of a project. It is a set of decisions that starts with the site and continues through every material we specify.',
    date_text: 'May 28, 2024',
    img: Photo.imagehouse,
    author_name: 'Sarah Mitchell',
    author_avatar: Photo.Member2,
    read_time: '7 min read',
    table_of_contents: [
      'Why it matters',
      'Materials with a past and a future',
      'Energy is part of the design',
      'What comes next',
    ],
    body: [
      {
        type: 'paragraph',
        text: "Sustainable construction is often described as a technology problem. In practice, most of the impact is decided long before the first smart device is installed - in orientation, structure and the materials we choose.",
      },
      {
        type: 'heading',
        text: 'Why it matters',
      },
      {
        type: 'paragraph',
        text: "Buildings account for a large share of global energy use and carbon emissions. Every project we take on is a chance to reduce that footprint while creating a healthier place to live and work.",
      },
      {
        type: 'heading',
        text: 'Materials with a past and a future',
      },
      {
        type: 'list',
        items: [
          'Reusing existing structures instead of demolishing them',
          'Specifying low-carbon concrete and responsibly sourced timber',
          'Choosing finishes that can be separated and recycled at the end of their life',
        ],
      },
      {
        type: 'heading',
        text: 'Energy is part of the design',
      },
      {
        type: 'paragraph',
        text: "Insulation, shading and airtightness cost less than oversized heating systems. We model the building early, then let the results guide the façade, the roof and the glazing.",
      },
      {
        type: 'paragraph',
        text: "The next step is measurement. A building is only as sustainable as its actual performance, so we return after handover to check consumption and fine-tune the systems.",
      },
    ],
  },
  {
    id: 3,
    title: 'Renovation Trends That Actually Last',
    tag: 'Renovation',
    description: 'Not every trend deserves a place in your home. These are the renovation ideas we keep coming back to because they solve real problems and hold their value.',
    date_text: 'May 16, 2024',
    img: Photo.Rectangle13,
    author_name: 'Michael Carter',
    author_avatar: Photo.Member3,
    read_time: '5 min read',
    table_of_contents: [
      'Open, not empty',
      'Kitchens that work harder',
      'Quiet technology',
      'A note on budgets',
    ],
    body: [
      {
        type: 'paragraph',
        text: "Renovation advice is everywhere, and most of it is about appearance. The changes that last are usually the ones you cannot see in a photograph: better storage, smarter services and rooms that fit the way you actually live.",
      },
      {
        type: 'heading',
        text: 'Open, not empty',
      },
      {
        type: 'paragraph',
        text: "Removing every wall can make a home feel larger, but it can also make it feel undefined. We prefer to open the right connections and keep a few quiet rooms for work, rest and storage.",
      },
      {
        type: 'heading',
        text: 'Kitchens that work harder',
      },
      {
        type: 'list',
        items: [
          'Deep drawers instead of narrow cupboards',
          'A clear triangle between sink, hob and fridge',
          'Surfaces that can take a hot pan and a sharp knife',
        ],
      },
      {
        type: 'heading',
        text: 'Quiet technology',
      },
      {
        type: 'paragraph',
        text: "Good technology disappears into the background. Lighting scenes, heating controls and ventilation should be simple enough to use every day without an instruction manual.",
      },
      {
        type: 'heading',
        text: 'A note on budgets',
      },
      {
        type: 'paragraph',
        text: "We always recommend spending on the parts that are hard to change later - structure, windows, insulation and services - and saving on the parts that are easy to update in a weekend.",
      },
    ],
  },
  {
    id: 4,
    title: 'Designing Communities People Love',
    tag: 'Home Design',
    description: 'A good community is more than a row of houses. It is a set of shared spaces, comfortable distances and small decisions that make neighbours into a neighbourhood.',
    date_text: 'May 4, 2024',
    img: Photo.Card_image2,
    author_name: 'John Doe',
    author_avatar: Photo.Member1,
    read_time: '6 min read',
    table_of_contents: [
      'The space between homes',
      'Walkability first',
      'Shared, not public',
      'Design for the long term',
    ],
    body: [
      {
        type: 'paragraph',
        text: "When we plan a community, we spend as much time on the space between the buildings as on the buildings themselves. That is where daily life happens: on the path to school, at the shared garden, on the corner bench.",
      },
      {
        type: 'heading',
        text: 'The space between homes',
      },
      {
        type: 'paragraph',
        text: "A narrow street with front doors visible from the road feels safer than a wide one with blank walls. Setbacks, planting and lighting all shape how people move through a neighbourhood.",
      },
      {
        type: 'heading',
        text: 'Walkability first',
      },
      {
        type: 'list',
        items: [
          'Shops and services within a five-minute walk',
          'Shaded routes that work in the hottest months',
          'Cars kept to the edge, not the middle, of the plan',
        ],
      },
      {
        type: 'heading',
        text: 'Shared, not public',
      },
      {
        type: 'paragraph',
        text: "Shared courtyards and gardens work best when they are clearly owned by a small group of residents. Too much shared space becomes nobody's space, and it stops being cared for.",
      },
      {
        type: 'paragraph',
        text: "The best compliment a community can receive is that people stay. We design for the long term: flexible homes, durable materials and spaces that can be adapted as the residents change.",
      },
    ],
  },
  {
    id: 5,
    title: 'How We Cut Construction Waste by 40%',
    tag: 'Sustainability',
    description: 'Waste is not just an environmental problem - it is a cost problem. Here is how better planning, prefabrication and site discipline changed the way we build.',
    date_text: 'April 22, 2024',
    img: Photo.imagehouse2,
    author_name: 'Sarah Mitchell',
    author_avatar: Photo.Member2,
    read_time: '8 min read',
    table_of_contents: [
      'Measure before you cut',
      'Prefabrication',
      'A place for everything',
      'What we learned',
    ],
    body: [
      {
        type: 'paragraph',
        text: "On a typical construction site, a surprising amount of material never makes it into the finished building. Offcuts, over-ordering and damaged deliveries all add up - in money and in carbon.",
      },
      {
        type: 'heading',
        text: 'Measure before you cut',
      },
      {
        type: 'paragraph',
        text: "Accurate take-offs and a coordinated design model remove most of the guesswork. When the structure, services and finishes are checked against each other before work starts, fewer surprises appear on site.",
      },
      {
        type: 'heading',
        text: 'Prefabrication',
      },
      {
        type: 'list',
        items: [
          'Wall panels cut to size in a controlled workshop',
          'Bathroom pods assembled before delivery',
          'Structural elements produced in repeatable dimensions',
        ],
      },
      {
        type: 'heading',
        text: 'A place for everything',
      },
      {
        type: 'paragraph',
        text: "A clean, organised site is safer and less wasteful. Separate skips for timber, metal and packaging make it easy to recover value instead of sending everything to landfill.",
      },
      {
        type: 'heading',
        text: 'What we learned',
      },
      {
        type: 'paragraph',
        text: "The biggest gains came from planning, not from new technology. A short coordination meeting before a phase begins consistently saves more material than any single product choice.",
      },
    ],
  },
  {
    id: 6,
    title: 'A Room-by-Room Guide to Smart Renovation',
    tag: 'Renovation',
    description: 'Where should you spend, where should you save, and what should you leave alone? A practical guide to getting the most from a renovation budget.',
    date_text: 'April 9, 2024',
    img: Photo.Card_image3,
    author_name: 'Michael Carter',
    author_avatar: Photo.Member3,
    read_time: '5 min read',
    table_of_contents: [
      'Kitchen and living',
      'Bedrooms',
      'Bathrooms',
      'Where to save',
    ],
    body: [
      {
        type: 'paragraph',
        text: "A renovation budget is never unlimited, so the real skill is knowing where a pound or a dollar will make the biggest difference. These are the priorities we recommend to most clients.",
      },
      {
        type: 'heading',
        text: 'Kitchen and living',
      },
      {
        type: 'paragraph',
        text: "This is where most of the daily life happens, so it deserves the best layout and the most durable surfaces. Get the working triangle right before choosing colours.",
      },
      {
        type: 'heading',
        text: 'Bedrooms',
      },
      {
        type: 'paragraph',
        text: "Bedrooms need less, but they need it done well: good insulation, quiet doors and enough storage. A simple, well-built wardrobe is worth more than a decorative feature wall.",
      },
      {
        type: 'heading',
        text: 'Bathrooms',
      },
      {
        type: 'list',
        items: [
          'Waterproofing is never the place to save',
          'Ventilation prevents most long-term problems',
          'Simple tiles age better than busy patterns',
        ],
      },
      {
        type: 'heading',
        text: 'Where to save',
      },
      {
        type: 'paragraph',
        text: "Lighting, paint and furniture can be changed later without major work. Structure, windows and services cannot, so make those decisions carefully and keep the rest flexible.",
      },
    ],
  },
];
