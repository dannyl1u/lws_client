/**
 * v0 by Vercel.
 * @see https://v0.dev/t/N6R22nSoF6T
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

"use client";

import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function App() {
  return (
    <Card className="w-full max-w-8xl mx-auto">
      <CardHeader className="pb-0">
        <CardTitle>Deploy</CardTitle>
        <CardDescription>Connect your GitHub repository to begin</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mt-6 space-y-4">
          <div className="flex items-center space-x-4">
            <svg
              className="text-gray-500"
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM11 17V11H13V17H11ZM11 7V9H13V7H11Z"
                fill="currentColor"
                fill-rule="evenodd"
              />
            </svg>
            <div className="space-y-2 w-full">
              <Label htmlFor="repository">Repository Clone URL</Label>
              <Input id="repository" placeholder="Enter your repository clone URL" required />
            </div>
          </div>
          <Button className="w-full">Deploy</Button>
        </div>
      </CardContent>
    </Card>
  )
}

