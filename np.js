const ft = async (n) => {
  const f = await fetch('https://accounts.spotify.com/api/token', {
    method:'POST',
    headers:{
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body:'grant_type=client_credentials&client_id=6c00a0ed19a8421e8cdb5b362583e65d&client_secret=87727ad30ad5472fad1c15f345ca62a4'
  });

  return n(f.json());
};

ft((m) => {
  setTimeout(() =>{
    console.log(m);
  }, 1000);
});