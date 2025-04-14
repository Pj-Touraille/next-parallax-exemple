import Link from 'next/link';

export default function Page() {
    return (
        <div>
            <h1>Blog page</h1>
            <Link href="/blog/test-1">test-1</Link>
            <Link href="/blog/test_2">test_2</Link>
        </div>
    );
}