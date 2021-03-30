import React from 'react'

import {FaChevronUp, FaChevronDown} from 'react-icons/fa'

import {
    HomeContainer,
    Title,
    Table,
    TableHead,
    TableBody,
    Th,
    Td,
    Row,
    Text,
    Input
} from './styles'

export default function Home(){
    return(
        <HomeContainer>
            <Title>Tabela de Permissões</Title>

            <Table>
                <TableHead>
                    <Row>
                        <Th></Th>
                        <Th><Text fontSize="1.2rem" fontWeight="bold">Ver listagem</Text></Th>
                        <Th><Text fontSize="1.2rem" fontWeight="bold">Ver detalhes</Text></Th>
                        <Th><Text fontSize="1.2rem" fontWeight="bold">Criar</Text></Th>
                        <Th><Text fontSize="1.2rem" fontWeight="bold">Editar</Text></Th>
                        <Th><Text fontSize="1.2rem" fontWeight="bold">Deletar</Text></Th> 
                    </Row>
                </TableHead>
                <TableBody>
                    <Row color="dark-gray">
                        <Td  textAlign="left"><Text hasPadding={true} fontSize="1.2rem" fontWeight="bold">Todos</Text></Td>
                        <Td><Input type="checkbox" /></Td>
                        <Td><Input type="checkbox" /></Td>
                        <Td><Input type="checkbox" /></Td>
                        <Td><Input type="checkbox" /></Td>
                        <Td><Input type="checkbox" /></Td> 
                    </Row>
                    <Row color="gray">
                        <Td  textAlign="left"><Text fontSize="1.2rem" fontWeight="bold">Análise <FaChevronUp/></Text></Td>
                        <Td><Input type="checkbox" /></Td>
                        <Td><Input type="checkbox" /></Td>
                        <Td><Input type="checkbox" /></Td>
                        <Td><Input type="checkbox" /></Td>
                        <Td><Input type="checkbox" /></Td> 
                    </Row> 
                    <Row>
                        <Td  textAlign="left"><Text>Análise de contas</Text></Td>
                        <Td><Input type="checkbox" /></Td>
                        <Td><Input type="checkbox" /></Td>
                        <Td><Input type="checkbox" /></Td>
                        <Td><Input type="checkbox" /></Td>
                        <Td><Input type="checkbox" /></Td> 
                    </Row> 
                    <Row>
                        <Td  textAlign="left"><Text>Análise de transações</Text></Td>
                        <Td><Input type="checkbox" /></Td>
                        <Td><Input type="checkbox" /></Td>
                        <Td><Input type="checkbox" /></Td>
                        <Td><Input type="checkbox" /></Td>
                        <Td><Input type="checkbox" /></Td> 
                    </Row> 
                </TableBody>
            </Table>
        </HomeContainer>
    )
}