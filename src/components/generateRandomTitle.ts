
export function getRandomTitle(): string {
    const titles: string[] = [
        "Synthesis of Rhythm: A Multidisciplinary Dance Odyssey",
        "Embodied Narratives: Weaving Stories Through Movement",
        "Beyond Borders: Choreographing Cultural Confluences",
        "Multifaceted Odyssey: Intertwining Dance, Film, Identity",
        "Artistic Alchemy: Fusing Movement, Media, and Meaning",
        "Transitory Encounters: Interweaving Genres, Cultures, Expressions",
        "Fluidity in Motion: Transcending Artistic Limitations",
        "Dancing Through Dimensions: Interdisciplinary Creative Fusion",
        "Convergence: Movement, Multimedia, and Minds Entwined",
        "Transcending Boundaries: Choreography Meets Digital Realms",
        "Unraveling Tapestry: Interplay of Art Forms",
        "Reimagining Movement: Intersections in Time and Space",
        "Kinetic Poetry: Expressive Gestures Across Media",
        "Interlaced Inspiration: Embracing the In-Between Spaces",
        "Unspoken Language: Body, Emotion, and Digital Canvas",
        "Wanderlust in Motion: A Transcultural Artistic Voyage",
        "Illuminated Dreams: Translating Visions Through Dance",
        "Disruptive Harmony: Intuitive Dialogues Among Disciplines",
        "Shifting Tides: Navigating the Ebb and Flow of Art",
        "Ephemeral Whispers: Traces of Movement, Memory, and Media",
        "Between Worlds: Choreographic Explorations of Hybridity",
        "Timeless Fusion: Merging Art Forms, Unearthing Beauty",
        "Celestial Dance: Boundless Creativity and Ethereal Expression",
        "Enigmatic Mosaics: Assembling Artistic Fragments into Wholeness",
        "Crossroads of Expression: Intersectional Choreographic Landscapes",
        "Dynamic Alchemies: Evolving Artistry Through Diverse Elements",
        "Reaching Horizons: Expanding Artistic Frontiers Through Dance",
        "In-Between Spaces: Weaving Art Forms into New Realities",
        "Mutable Realms: Dancing Through Artistic and Cultural Shifts",
        "Reverberating Echoes: A Symphony of Diverse Artistry",
        "Restless Reverie: Transgressing Boundaries in Dance and Media",
        "Unfolding Cosmos: Creative Constellations Across Disciplines",
        "Resonant Frequencies: Harmonizing Art Forms in Motion",
        "Tides of Transformation: Exploring Fluidity in Artistic Expression",
        "Disrupting Silence: Enigmatic Conversations Among Mediums",
        "Merging Realities: Choreographing a Tapestry of Experiences",
        "Embodying Intangible: The Intertwining of Art, Culture, and Soul",
    ];
  
    const randomIndex = Math.floor(Math.random() * titles.length);
    return titles[randomIndex];
  }

