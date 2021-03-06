module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Emmanuel Emejulu's Portfolio`,
        short_name: `Emmanuel Emejulu's Portfolio`,
        start_url: `/`,
        background_color: `#6698FF`,
        theme_color: `#5CB3FF`,
        display: `standalone`,
        icon: 'src/images/profile.jpg',
      },
    },
  ],
};
