import { Avatar, Box, Flex, Heading, HoverCard, Text } from '@radix-ui/themes'
import { VoucherWithCondition } from 'src/types/voucher.type'

type Props = {
    voucher?: VoucherWithCondition
    setSelected: React.Dispatch<React.SetStateAction<VoucherWithCondition | undefined>>
}

const VoucherDetail = ({ voucher, setSelected }: Props) => {
    const handleChange = (state: boolean) => {
        if (!state) {
            setSelected(undefined)
        }
    }

    if (!voucher) {
        return <></>
    }

    return (
        <HoverCard.Root key={`voucher_detail_${voucher.id}`} open={!!voucher} onOpenChange={handleChange}>
            <HoverCard.Content maxWidth='300px'>
                <Flex gap='4'>
                    <Avatar
                        size='3'
                        fallback='R'
                        radius='full'
                        src='https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png'
                    />
                    <Box>
                        <Heading size='3' as='h3'>
                            Radix
                        </Heading>
                        <Text as='div' size='2' color='gray' mb='2'>
                            @radix_ui
                        </Text>
                        <Text as='div' size='2'>
                            React components, icons, and colors for building high-quality, accessible UI.
                        </Text>
                    </Box>
                </Flex>
            </HoverCard.Content>
        </HoverCard.Root>
    )
}

export default VoucherDetail
