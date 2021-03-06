import { db } from '~/firebase/firebase.server';
import { BlogData, CreateBlogData } from '~/utils/types';

export const createBlog = async (blog: CreateBlogData) => {
  try {
    const newBlog = db.collection('blogs').doc();

    await newBlog
      .set({
        id: newBlog.id,
        name: blog.name,
        content: blog.content,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      })
      .then(() => {
        console.log('New blog has been created!');
      });

    return newBlog.id;
  } catch (error) {
    console.log("Couldn't post a blog");
    return { error };
  }
};

export const getBlogs = async () => {
  try {
    const blogs: BlogData[] = [];

    await db
      .collection('blogs')
      .get()
      .then((res) => {
        res.forEach((doc: any) => {
          // doc.data() is never undefined for query doc snapshots
          blogs.push(doc.data());
        });
      });

    return blogs;
  } catch (error) {
    console.log("Couldn't get blogs", error);
  }
};

export const getBlog = async (id: string) => {
  try {
    return await db
      .collection('blogs')
      .doc(id)
      .get()
      .then((blog) => {
        if (blog.exists) {
          return blog.data() as BlogData;
        } else {
          console.log('No such document!');
        }
      });
  } catch (error) {
    console.log("Couldn't get blogs");
  }
};
