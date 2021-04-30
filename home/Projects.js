const AppTypes = Object.freeze({PERN: 0, React: 1, HTML: 2});
const Projects = {
    list: 
    [
        {
            title: 'Dreamalish',
            type: AppTypes.PERN,
            thumbnail: './thumbs/dreamcatcher.png', 
            description: 'Used class components and typescript with React to build a web app for logging dreams. Designed and implemented user profiles with profile pictures, and preferences for showing or hiding sensitive media. Allowed users to create posts and categorize them by dream type. Implemented a public view where users can comment on dreams. Full CRUD functionality.',
            link: 'https://dreamalish-client.herokuapp.com/',
            gitFront: 'https://github.com/mvhayes1980/dreamcatcher-client',
            gitBack: 'https://github.com/mvhayes1980/dreamcatcher'
        },
        {
            title: 'Pokemon React App', 
            type: AppTypes.PERN,
            thumbnail: './thumbs/pkmnproj.png', 
            description: `Used React components to build a Pokémon simulator web app with user creation, CRUD, and battle simulation features. Designed and implemented the app to fetch image and game data via external APIs to simulate the original game. Made a training page, where users can increase their stats, and a multiplayer fighting system based on hosting and joining matches.`,
            link: 'https://dreamalish-client.herokuapp.com/',
            gitFront: 'https://github.com/mvhayes1980/dreamcatcher-client',
            gitBack: 'https://github.com/mvhayes1980/dreamcatcher'
        },
        {
            title: 'NASA Static Recreation', 
            type: AppTypes.HTML,
            thumbnail: './thumbs/staticlayout.png', 
            description: 'An accurate recreation the official NASA website layout using only HTML and CSS.',
            link: 'https://tim-culp.github.io/StaticLayout/',
            gitLink: 'https://github.com/Tim-Culp/StaticLayout'
        },
        {
            title: "Mars API Project",
            type: AppTypes.HTML,
            thumbnail: './thumbs/apiproj.png',
            description: `A web app that pulls images from NASA's Mars images API and displays them in a convenient list. Features pagination and page lookup.`,
            link: 'https://pictures-of-mars.web.app/',
            gitLink: 'https://github.com/Tim-Culp/Mars-Images-Client'
        }
    ]
}