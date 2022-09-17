import { InputHTMLAttributes } from 'react'

interface TimeProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Time (props : TimeProps) {
    return (
        <input
            {...props}
            className='bg-zinc-900 py-2 px-3 rounded text-sm placeholder:text-zinc-500'
        />
    )
}