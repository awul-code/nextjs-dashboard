"use client";

import { useEffect } from "react";

const ErrorPage = ({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) => {
	useEffect(() => {
		console.log(error);
	}, [error]);

	return (
		<main className="flex h-full flex-col items-center justify-center">
			<h2 className="text-center">Something went wrong!</h2>
			<button
				className="mt-4 bg-blue-500 text-white hover:bg-blue-400 py-2 px-4 rounded"
				onClick={() => reset}
			>
				Try Again
			</button>
		</main>
	);
};

export default ErrorPage;
