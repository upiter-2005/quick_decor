export interface IProduct {
    id: number
    date: string
    date_gmt: string
    guid: Guid
    modified: string
    modified_gmt: string
    slug: string
    status: string
    type: string
    link: string
    title: Title
    content: Content
    excerpt: Excerpt
    author: number
    featured_media: number
    comment_status: string
    ping_status: string
    sticky: boolean
    template: string
    format: string
    meta: Meta
    categories: number[]

    class_list: string[]
    acf: Acf
    _links: Links
  }
  
  export interface Guid {
    rendered: string
  }
  
  export interface Title {
    rendered: string
  }
  
  export interface Content {
    rendered: string
    protected: boolean
  }
  
  export interface Excerpt {
    rendered: string
    protected: boolean
  }
  
  export interface Meta {
    footnotes: string
  }
  
  export interface Acf {
    title_for_site_page: string | undefined
    front_name: string
    variations: string
    gallery_images: []
    price: string
    old_price: string
    color_image: string
    colors: string
    description: string
    hall_type: string[]
    title_seo: string
    descript_seo: string
    hall_types: []
    serf_area: []
    prepare: []
    usefull: []
  }
  
  export interface Links {
    self: Self[]
    collection: Collection[]
    about: About[]
    author: Author[]
    replies: Reply[]
    "version-history": VersionHistory[]
    "predecessor-version": PredecessorVersion[]
    "acf:attachment": AcfAttachment[]
    "wp:featuredmedia": Featuredmedum[]
    "wp:attachment": WpAttachment[]
    "wp:term": WpTerm[]
    curies: Cury[]
  }
  
  export interface Self {
    href: string
    targetHints: TargetHints
  }
  
  export interface TargetHints {
    allow: string[]
  }
  
  export interface Collection {
    href: string
  }
  
  export interface About {
    href: string
  }
  
  export interface Author {
    embeddable: boolean
    href: string
  }
  
  export interface Reply {
    embeddable: boolean
    href: string
  }
  
  export interface VersionHistory {
    count: number
    href: string
  }
  
  export interface PredecessorVersion {
    id: number
    href: string
  }
  
  export interface AcfAttachment {
    embeddable: boolean
    href: string
  }
  
  export interface Featuredmedum {
    embeddable: boolean
    href: string
  }
  
  export interface WpAttachment {
    href: string
  }
  
  export interface WpTerm {
    taxonomy: string
    embeddable: boolean
    href: string
  }
  
  export interface Cury {
    name: string
    href: string
    templated: boolean
  }