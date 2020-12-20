const INITAL_STATE = {
  
    sections: [
      {
        title: "T-Shirts",
        linkURL: "shop/t-shirts",
        imageURL:
          "https://img01.ztat.net/article/spp-media-p1/05138df426d93c90be86560cebec4b9c/9982d1c2220c441b926f1ec119bb01aa.jpg?imwidth=1800",
        id: 1,
        size: "large"
      },
      {
        title: "Running",
        linkURL: "shop/running",
        imageURL:
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d0cdfbe0-75fe-4a18-a38e-76ec048845c4/swift-running-trousers-j7KLNx.jpg",
        id: 2,
        size: "large"
      },
      {
        title: "Sneakers",
        linkURL: "shop/sneakers",
        imageURL:
          "https://ae01.alicdn.com/kf/HTB1pCULKb1YBuNjSszhq6AUsFXao/UNN-Men-Casual-Shoes-Breathable-Male-Walk-Sofe-Adult-Non-slip-Footwear-New-Model-Men-s.jpg_q50.jpg",
        id: 3,
        size: "large"
      },
      {
        title: "Womens",
        linkURL: "shop/womens",
        imageURL:
          "https://img01.ztat.net/article/spp-media-p1/e542732a93593d84a35ec3ff24ba77e4/1bf549f598ba43e9bc1ec685aaf73f9c.jpg?imwidth=1800",
        id: 4,
        size: "large"
      },
      {
        title: "Mens",
        linkURL: "shop/mens",
        imageURL: "https://img01.ztat.net/article/spp-media-p1/d28d1fc2dc103981a1b0d918059aa0c3/6a5b2e4226464e458d5cb98aafe15bab.jpg?imwidth=1800",
        id: 5,
        size: "large"
      },
      {
        title: "Kids",
        linkURL: "shop/kids",
        imageURL: "https://img01.ztat.net/article/spp-media-p1/3924aceaa8cd35b2b9b225af70e616f9/72d4cb1540064aaa8b70de200d09224d.jpg?imwidth=1800",
        id: 5,
        size: "large"
      }
    ]
  };
  
  const directoryReducer = (state = INITAL_STATE, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  export default directoryReducer;
  