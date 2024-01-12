type Character = {
  name: string;
  link: string | null;
  decoration: 'bold' | 'italic' | null;
};

type Image = {
  caption: string;
  src: string;
};

type Link = {
  start: number;
  end: number;
  type: 'link';
  href: string;
};

type Bold = {
  start: number;
  end: number;
  type: 'bold';
};

type Italic = {
  start: number;
  end: number;
  type: 'italic';
};

type ElementRange = Link | Bold | Italic;

type Passage = {
  plaintext: string;
  elementRanges: ElementRange[];
  primaryImgSrc: string;
};

export type ArticleResponse = {
  images: Image[];
  passage: { elementRanges: ElementRange[]; plaintext: string };
  primaryImgSrc: string;
};
