export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className='mx-auto max-w-[68rem] px-5'>{children}</div>
    );
}
