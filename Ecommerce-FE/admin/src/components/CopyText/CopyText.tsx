import { CopyIcon } from '@radix-ui/react-icons'
import { Code, Flex, IconButton, Tooltip } from '@radix-ui/themes'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { cn } from 'src/utils/utils'

type Props = {
    text: string
    classNames?: string
    link?: boolean
}

const CopyText = ({ text, classNames, link }: Props) => {
    const handleCopyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(text)
            toast.success('Đã sao chép')
        } catch (err) {
            toast.error('Lỗi sao chép!')
        }
    }

    return (
        <Flex align='center' gap='2'>
            {link ? (
                <Link to={''} className={cn('line-clamp-1 w-full max-w-32', classNames)}>
                    {text}
                </Link>
            ) : (
                <Code variant='ghost' className={cn('line-clamp-1 w-full max-w-32', classNames)}>
                    {text}
                </Code>
            )}
            <Tooltip content='Copy'>
                <IconButton
                    size='3'
                    aria-label='Copy value'
                    color='gray'
                    variant='ghost'
                    type='button'
                    onClick={handleCopyToClipboard}
                >
                    <CopyIcon />
                </IconButton>
            </Tooltip>
        </Flex>
    )
}

export default CopyText
