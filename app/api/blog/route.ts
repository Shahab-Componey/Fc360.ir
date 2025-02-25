import {Types} from "mongoose";
import {NextResponse} from "next/server";

const connect = require("@/DB/db.ts");
const Blog = require("@/DB/models/blog.ts");
export const GET = async () => {
  try {
    await connect();
    const blogs = await Blog.find();

    return new NextResponse(JSON.stringify(blogs), {status: 200});
  } catch (err: any) {
    return new NextResponse(err, {status: 500});
  }
};

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    await connect();
    const newBlog = new Blog(body);
    console.log(newBlog);
    await newBlog.save();

    return new NextResponse(
      JSON.stringify({message: "user created", blog: newBlog}),
      {status: 200}
    );
  } catch (err: any) {
    err.errmsg.includes("duplicate") ? (err = "duplicated value") : null;
    console.log(err);
    return new NextResponse("server error " + err), {status: 500};
  }
};

export const PATCH = async (request: Request) => {
  try {
    const body = await request.json();
    const {blogId, newBlogName} = body;

    await connect();

    if (!blogId || !newBlogName) {
      return new NextResponse(
        JSON.stringify({message: "BlogName or BlodId dose not exist"}),
        {status: 500}
      );
    }

    if (!Types.ObjectId.isValid(blogId)) {
      return new NextResponse(JSON.stringify({message: "invalid user ID"}), {
        status: 500,
      });
    }

    const updatedBlog = await Blog.findOneAndUpdate(
      {_id: new Types.ObjectId(blogId)},
      {title: newBlogName},
      {new: true}
    );

    if (!updatedBlog) {
      return new NextResponse(JSON.stringify({mesage: "user not found"}), {
        status: 400,
      });
    }

    return new NextResponse(
      JSON.stringify({message: "user updated", newBlog: updatedBlog}),
      {status: 200}
    );
  } catch (err: any) {
    err.errmsg.includes("duplicate") ? (err = "duplicated value") : null;
    console.log(err);
    return new NextResponse("server error " + err), {status: 500};
  }
};

const DELETE = async (request: Request) => {};
