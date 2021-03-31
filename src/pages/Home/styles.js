import styled from 'styled-components'

export const HomeContainer = styled.div`
    margin: 3.73rem 3.2rem;

    @media (max-width: 580px){
        margin: 1rem 0;
    }
`

export const Title = styled.h1`
    color: var(--text);
    font-size: 1.8rem;
    margin-bottom: 4.3rem;

    @media(max-width: 580px){
        text-align: center;
        font-size: 1.5rem;
        border-bottom: 4px solid var(--gray);
        padding-bottom: 0.5rem;
        margin-bottom: 1rem;
    }
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

    @media(max-width: 580px){
        width: ${props => props.width && props.width};
        padding-right: 1rem;
    }
`

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;

    @media(max-width: 580px){
        display: block;
        overflow: scroll;
        overflow: auto;
    }
    
`
export const TableHead = styled.thead`
`
export const TableBody = styled.tbody`
`

export const Row = styled.tr`
    background: var(--${props => props.color ? props.color: 'white'});

    &.d-none{
        display: none;
    }
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

export const ButtonContainer = styled.div`
    text-align: center;
`

export const Button = styled.button`
    background: var(--button-color);
    color: var(--white);
    border: 0;
    border-radius: var(--border-radius);
    padding: 0.8rem 4.2rem;
    margin-top: 5rem;
`
