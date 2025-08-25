
"use client";
import { useParams } from 'next/navigation';

export default function UserPage() {
  const params = useParams();
  return (
    <div>
      <h1>User ID: {params.id}</h1>
    </div>
  );
}
