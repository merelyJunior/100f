import axios from 'axios';
import jwt_decode from "jwt-decode";
let cachedToken = null;

export async function getToken() {
  try {
    const response = await axios.post('https://blog.100f.com/?rest_route=/simple-jwt-login/v1/auth', {
      email: '100fsiteblog@gmail.com',
      password: 'contIqXcEc^vCupXE4',
    });
    cachedToken = response.data.data.jwt;
    return cachedToken;
  } catch (error) {
    console.error('Error fetching token:', error.message);
    throw new Error('Failed to fetch token');
  }
}

export async function refreshToken(currentToken) {
  try {
    const response = await axios.post('https://blog.100f.com/?rest_route=/simple-jwt-login/v1/refresh', {
      token: currentToken,
    });
    cachedToken = response.data.data.jwt;
    return cachedToken;
  } catch (error) {
    console.error('Error refreshing token:', error.message);
    throw new Error('Failed to refresh token');
  }
}

export function isTokenExpired(token) {
  try {
    const decoded = jwt_decode(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp < currentTime;
  } catch (error) {
    console.error('Error decoding token:', error.message);
    return true;
  }
}

export async function getValidToken() {
  if (cachedToken && !isTokenExpired(cachedToken)) {
    return cachedToken;
  }

  if (cachedToken && isTokenExpired(cachedToken)) {
    try {
      cachedToken = await refreshToken(cachedToken);
      return cachedToken;
    } catch (error) {
      cachedToken = await getToken();
      return cachedToken;
    }
  }

  cachedToken = await getToken();
  return cachedToken;
}
export async function getAllPosts(token) {
  try {
    const response = await axios.get('https://blog.100f.com/wp-json/wp/v2/all_posts', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const params = ['id', 'link', 'status', 'type', 'title', 'parent', 'content', 'acf', 'date', 'modified', 'author'];
   
    const posts = await Promise.all(response.data.map(async (item) => {
      const elems = {};
      params.forEach(elem => {
        if (item.hasOwnProperty(elem)) {
          elems[elem] = item[elem];
        }
      });

      const domain = 'https://blog.100f.com/blog_post/';
      elems.link = item.link.replace(domain, '');
      elems.author_name = 'Unnamed Author';
      if (item.author) {
        try {
          const authorResponse = await axios.get(`https://blog.100f.com/wp-json/wp/v2/users/${item.author}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          elems.author_name = authorResponse.data.name;
        } catch (error) {
          console.error(`Error fetching author data with ID ${item.author}:`, error.message);
         
        }
      }
      return elems;
    }));
    return posts;
  } catch (error) {
    console.error('Error fetching all posts:', error.message);
  }
}

export async function mailSender(req, res) {
  if (req.method === 'POST') {
    const { email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: subject,
      text: message,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

// export async function getPages(req, res) {
//   try {
//     const token = await getValidToken(req, res);
//     const response = await axios.get('https://blog.100f.com/wp-json/wp/v2/pages', {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     });
//     const params = ['id', 'link', 'status', 'type', 'title', 'parent', 'content', 'acf'];
//     const pages = response.data.map(item => {
//       const elems = {};
//       params.forEach(elem => {
//         if (item.hasOwnProperty(elem)) {
//           elems[elem] = item[elem];
//         }
//       });
//       const domain = 'https://blog.100f.com/';
//       elems.link = item.link.replace(domain, '');
//       return elems;
//     });

//     const splitData = (dataArray) => {
//       const parents = dataArray.filter(item => item.parent === 0);
//       const children = dataArray.filter(item => item.parent !== 0);
//       return { parents, children };
//     };

//     const attachChildrenToParents = (parents, children) => {
//       return parents.map(parent => {
//         const parentChildren = children.filter(child => child.parent === parent.id);
//         return { ...parent, children: parentChildren };
//       });
//     };

//     const { parents, children } = splitData(pages);
//     const parentsWithChildren = attachChildrenToParents(parents, children);

//     if (res) {
//       res.status(200).json(parentsWithChildren);
//     } else {
//       return parentsWithChildren;
//     }
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     if (res) {
//       res.status(500).json({ message: 'Failed to fetch data' });
//     } else {
//       return null;
//     }
//   }
// }


// export async function getPopularPosts(req, res) {
//   try {
//     authenticateToken(req);

//     const token = req ? req.headers['authorization'].split(' ')[1] : 'your-jwt-token';
//     const response = await axios.get('https://blog.100f.com/wp-json/wp/v2/popular', {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     });

//     const params = ['id', 'link', 'status', 'type', 'title', 'parent', 'content', 'acf'];
//     const posts = response.data.map(item => {
//       const elems = {};
//       params.forEach(elem => {
//         if (item.hasOwnProperty(elem)) {
//           elems[elem] = item[elem];
//         }
//       });
//       const domain = 'https://blog.100f.com/popular/';
//       elems.link = item.link.replace(domain, '');
//       return elems;
//     });

//     if (res) {
//       res.status(200).json(posts);
//     } else {
//       return posts;
//     }
//   } catch (error) {
//     console.error('Error fetching popular posts:', error);
//     if (res) {
//       res.status(500).json({ message: 'Failed to fetch popular posts' });
//     } else {
//       throw new Error('Failed to fetch popular posts');
//     }
//   }
// }

// Обновленная функция getCoins
export async function getCoins(req, res) {
  try {
    authenticateToken(req);

    const response = await axios.get('https://100f.com/coinApi.php');
    if (res) {
      res.status(200).json(response.data);
    } else {
      return response.data;
    }
  } catch (error) {
    console.error('Error fetching coins:', error);
    if (res) {
      res.status(500).json({ message: 'Failed to fetch coins' });
    } else {
      return null;
    }
  }
}

export async function getRelatedPosts(token, postId) {
  try {
    const response = await axios.get(`https://blog.100f.com/wp-json/yarpp/v1/related/${postId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const relatedPostsIds = response.data.map(post => post.id);

    const posts = await Promise.all(relatedPostsIds.map(async postId => {
      const response = await axios.get(`https://blog.100f.com/wp-json/wp/v2/all_posts/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const item = response.data;

      const params = ['id', 'link', 'status', 'type', 'title', 'parent', 'content', 'acf', 'date', 'modified', 'author'];
      const elems = {};
      params.forEach(param => {
        if (item.hasOwnProperty(param)) {
          elems[param] = item[param];
        }
      });

      const domain = 'https://blog.100f.com/blog_post/';
      elems.link = item.link.replace(domain, '');

      if (item.author) {
        try {
          const authorResponse = await axios.get(`https://blog.100f.com/wp-json/wp/v2/users/${item.author}`);
          elems.author_name = authorResponse.data.name;
        } catch (error) {
          console.error(`Ошибка получения данных об авторе с ID ${item.author}:`, error);
        }
      }
      return elems;
    }));
    return posts;
  } catch (error) {
    console.error('Error fetching related posts:', error);
   
  }
}

export async function getAuthorInfo(token, id) {
  try {
    const authorResponse = await axios.get(`https://blog.100f.com/wp-json/wp/v2/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  
    return authorResponse.data;
  } catch (error) {
    console.error('Error fetching author info:', error);
  }
}

export async function getPostViews(token, postId) {
  try {
    const response = await axios.get(`https://blog.100f.com/wp-json/100fapi/v1/get-views/?post_id=${postId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data.views;
  } catch (error) {
    console.error('Error fetching post views:', error);
  
  }
}
