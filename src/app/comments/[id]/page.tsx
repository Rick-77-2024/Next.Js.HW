
"use client";
import { useParams } from "next/navigation";

export default function CommentPage() {
  const params = useParams();
  return <div>Comment ID: {params.id}</div>;
}
