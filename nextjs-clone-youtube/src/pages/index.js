import React from 'react';
import { Box, Grid } from '@material-ui/core';
import Layout from 'src/components/Layout';
import VideoCard from 'src/components/VideoCard';


function Home({ data }) {
  return (
    <Layout title="YouTube">
      <Box p={2}>
        <Grid container spacing={4}>
          {data.map((item) => (
            <Grid key={item._id} item xl={3} lg={3} md={4} sm={6} xs={12}>
              <VideoCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
}

export async function getStaticProps() {
   const data = [
     {
       id: 1,
       title: 'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
       authorId: 1,
       authorName: 'Lucas Couto',
      authorAvatar: 'avatarUrl',
       views: 10,
       thumb: '/thumbs/ft1.png',
       videoUrl: 'url',
       updatedAt: new Date(),
     },
     {
      id: 2,
      title: 'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
      authorId: 1,
      authorName: 'Lucas Couto',
     authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/ft2.png',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
    {
      id: 3,
      title: 'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
      authorId: 1,
      authorName: 'Lucas Couto',
     authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/ft2.png',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
    {
      id: 4,
      title: 'Cortando na Regua',
      authorId: 1,
      authorName: 'Lucas Couto',
     authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/ft3.jpg',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
   ];

 // const data = await getVideos();
// const teste = data.json();
 //  console.log(teste);
  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    }, // will be passed to the page component as props
  };
}

export default Home;
