import styled from 'styled-components'

export const HomeContainer = styled.div`
    margin: 3.73rem 3.2rem;
`

export const Title = styled.h1`
    color: var(--text);
    font-size: 1.8rem;
    margin-bottom: 4.3rem;
`

export const Text = styled.p`
    color: var(--text);
    font-size: ${props => props.fontSize ? props.fontSize : "1rem"};
    font-weight: ${props => props.fontWeight ? props.fontWeight : "normal"};
    padding: ${props => props.hasPadding && '0.5rem 0'};

    svg{
        margin-left: 1.2rem;
        color: var(--text);
    }
`

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
`
export const TableHead = styled.thead`
`
export const TableBody = styled.tbody`
`

export const Row = styled.tr`
    background: var(--${props => props.color ? props.color: 'white'});
`

export const Th = styled.th`
    width: 4.5rem;
`

export const Td = styled.td`
    text-align: ${props => props.textAlign? props.textAlign : "center"};
    padding: 0.5rem 1rem;
`

export const Input = styled.input`
    background: var(--darker-gray);
`