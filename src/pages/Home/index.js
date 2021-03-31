import React, { useEffect, useState } from 'react'

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
    Input,
    ButtonContainer,
    Button
} from './styles'

export default function Home(){

    const [isActiveListagem, setIsActiveListagem] = useState(false)
    const [columnName, setColumnName] = useState()

    const [isCollapseAnalise, setIsCollapseAnalise] = useState(false)
    const [isCollapseConta, setIsCollapseConta] = useState(false)
    const [isCollapseCustomizacao, setIsCollapseCustomizacao] = useState(false)
    const [isCollapseFinaceiro, setIsCollapseFinanceiro] = useState(false)

    useEffect(()=>{
        function change(){
            let response = document.querySelectorAll(`.${columnName}`)

            response.forEach(r => {
                r.checked = isActiveListagem
                
                changeInternalInput(r.classList[r.classList.length-1])
            })
        }
        function changeInternalInput(name){
            let response = document.querySelectorAll(`.${name}`)

            response.forEach(r => {
                r.checked = isActiveListagem
            })
        }

        change()
        
    }, [isActiveListagem, columnName])


    function handleChange(value, columnName){
        setIsActiveListagem(value)
        setColumnName(columnName)
    }

    function collapse(name){
        let response = document.querySelectorAll(`.${name}`)

        response.forEach(r => {
            r.classList.toggle('d-none')
        })

        if(name === 'analise')
            setIsCollapseAnalise(!isCollapseAnalise)
        else if(name === 'conta')
            setIsCollapseConta(!isCollapseConta)
        else if(name === 'customizacao')
            setIsCollapseCustomizacao(!isCollapseCustomizacao)
        else if(name === 'financeiro')
            setIsCollapseFinanceiro(!isCollapseFinaceiro)
    }

    return(
        <HomeContainer>
            <Title>Tabela de Permissões</Title>

            <Table>
                <TableHead>
                    <Row>
                        <Th></Th>
                        <Th><Text hasPadding={true} width="min-content" fontSize="1.2rem" fontWeight="bold">Ver listagem</Text></Th>
                        <Th><Text fontSize="1.2rem" width="min-content" fontWeight="bold">Ver detalhes</Text></Th>
                        <Th><Text fontSize="1.2rem" width="min-content" fontWeight="bold">Criar</Text></Th>
                        <Th><Text fontSize="1.2rem" width="min-content" fontWeight="bold">Editar</Text></Th>
                        <Th><Text fontSize="1.2rem" width="min-content" fontWeight="bold">Deletar</Text></Th> 
                    </Row>
                </TableHead>
                <TableBody>
                    <Row color="dark-gray">
                        <Td  textAlign="left"><Text hasPadding={true} fontSize="1.2rem" fontWeight="bold">Todos</Text></Td>
                        <Td><Input type="checkbox"
                            onChange={(e)=>handleChange(e.target.checked, 'listagem' )} 
                        /></Td>
                        <Td><Input type="checkbox" 
                            onChange={(e)=>handleChange(e.target.checked, 'detalhes' )} /></Td>
                        <Td><Input type="checkbox" 
                            onChange={(e)=>handleChange(e.target.checked, 'criar' )}/></Td>
                        <Td><Input type="checkbox" 
                            onChange={(e)=>handleChange(e.target.checked, 'editar' )}/></Td>
                        <Td><Input type="checkbox" 
                            onChange={(e)=>handleChange(e.target.checked, 'deletar' )}/></Td> 
                    </Row>
                    <Row color="gray">
                        <Td  textAlign="left">
                            <Text onClick={()=>collapse('analise')} width="max-content" fontSize="1.2rem" fontWeight="bold">
                                Análise 
                                {isCollapseAnalise ? <FaChevronUp/> : <FaChevronDown/>}
                            </Text>
                        </Td>
                        <Td><Input type="checkbox" className="listagem analise-listagem"  
                            onChange={(e)=>handleChange(e.target.checked, 'analise-listagem' )}/></Td>
                        <Td><Input type="checkbox" className="detalhes analise-detalhe"  
                            onChange={(e)=>handleChange(e.target.checked, 'analise-detalhe' )}/></Td>
                        <Td><Input type="checkbox" className="criar analise-criar" 
                            onChange={(e)=>handleChange(e.target.checked, 'analise-criar' )}/></Td>
                        <Td><Input type="checkbox" className="editar analise-editar"  
                            onChange={(e)=>handleChange(e.target.checked, 'analise-editar' )}/></Td>
                        <Td><Input type="checkbox" className="deletar analise-deletar"  
                            onChange={(e)=>handleChange(e.target.checked, 'analise-deletar' )}/></Td> 
                    </Row> 
                    <Row className="analise d-none">
                        <Td  textAlign="left"><Text>Análise de contas</Text></Td>
                        <Td><Input type="checkbox" className="analise-listagem"/></Td>
                        <Td><Input type="checkbox" className="analise-detalhe"/></Td>
                        <Td><Input type="checkbox" className="analise-criar"/></Td>
                        <Td><Input type="checkbox" className="analise-editar"/></Td>
                        <Td><Input type="checkbox" className="analise-deletar"/></Td> 
                    </Row> 
                    <Row className="analise d-none">
                        <Td  textAlign="left"><Text>Análise de transações</Text></Td>
                        <Td><Input type="checkbox" className="analise-listagem"/></Td>
                        <Td><Input type="checkbox" className="analise-detalhe"/></Td>
                        <Td><Input type="checkbox" className="analise-criar"/></Td>
                        <Td><Input type="checkbox" className="analise-editar"/></Td>
                        <Td><Input type="checkbox" className="analise-deletar"/></Td> 
                    </Row> 
                    <Row color="gray">
                        <Td  textAlign="left">
                            <Text onClick={()=>collapse('conta')} width="max-content" fontSize="1.2rem" fontWeight="bold">
                                Contas
                                {isCollapseConta ? <FaChevronUp/> : <FaChevronDown/>}
                            </Text>
                        </Td>
                        <Td><Input type="checkbox" className="listagem conta-listagem"  
                            onChange={(e)=>handleChange(e.target.checked, 'conta-listagem' )}/></Td>
                        <Td><Input type="checkbox" className="detalhes conta-detalhes"  
                            onChange={(e)=>handleChange(e.target.checked, 'conta-detalhes' )}/></Td>
                        <Td><Input type="checkbox" className="criar conta-criar"  
                            onChange={(e)=>handleChange(e.target.checked, 'conta-criar' )}/></Td>
                        <Td><Input type="checkbox" className="editar conta-editar"  
                            onChange={(e)=>handleChange(e.target.checked, 'conta-editar' )}/></Td>
                        <Td><Input type="checkbox" className="deletar conta-deletar"  
                            onChange={(e)=>handleChange(e.target.checked, 'conta-deletar' )}/></Td> 
                    </Row> 
                    <Row className="conta d-none">
                        <Td  textAlign="left"><Text>Cliente</Text></Td>
                        <Td><Input type="checkbox" className="conta-listagem"  /></Td>
                        <Td><Input type="checkbox" className="conta-detalhes"  /></Td>
                        <Td><Input type="checkbox" className="conta-criar"  /></Td>
                        <Td><Input type="checkbox" className="conta-editar"  /></Td>
                        <Td><Input type="checkbox" className="conta-deletar"  /></Td> 
                    </Row> 
                    <Row className="conta d-none">
                        <Td  textAlign="left"><Text>Transações</Text></Td>
                        <Td><Input type="checkbox" className="conta-listagem"  /></Td>
                        <Td><Input type="checkbox" className="conta-detalhes"  /></Td>
                        <Td><Input type="checkbox" className="conta-criar"  /></Td>
                        <Td><Input type="checkbox" className="conta-editar"  /></Td>
                        <Td><Input type="checkbox" className="conta-deletar"  /></Td> 
                    </Row> 
                    <Row className="conta d-none">
                        <Td  textAlign="left"><Text>Contas Digitais</Text></Td>
                        <Td><Input type="checkbox" className="conta-listagem"  /></Td>
                        <Td><Input type="checkbox" className="conta-detalhes"  /></Td>
                        <Td><Input type="checkbox" className="conta-criar"  /></Td>
                        <Td><Input type="checkbox" className="conta-editar"  /></Td>
                        <Td><Input type="checkbox" className="conta-deletar"  /></Td> 
                    </Row> 
                    <Row color="gray">
                        <Td  textAlign="left">
                            <Text onClick={()=>collapse('customizacao')} width="max-content" fontSize="1.2rem" fontWeight="bold">
                                Customização 
                                {isCollapseCustomizacao ? <FaChevronUp/> : <FaChevronDown/>}
                            </Text>
                        </Td>
                        <Td><Input type="checkbox" className="listagem customizacao-listagem"  
                            onChange={(e)=>handleChange(e.target.checked, 'customizacao-listagem' )}/></Td>
                        <Td><Input type="checkbox" className="detalhes customizacao-detalhes"  
                            onChange={(e)=>handleChange(e.target.checked, 'customizacao-detalhes' )}/></Td>
                        <Td><Input type="checkbox" className="criar customizacao-criar"  
                            onChange={(e)=>handleChange(e.target.checked, 'customizacao-criar' )}/></Td>
                        <Td><Input type="checkbox" className="editar customizacao-editar"  
                            onChange={(e)=>handleChange(e.target.checked, 'customizacao-editar' )}/></Td>
                        <Td><Input type="checkbox" className="deletar customizacao-deletar"  
                            onChange={(e)=>handleChange(e.target.checked, 'customizacao-deletar' )}/></Td> 
                    </Row> 
                    <Row className="customizacao d-none">
                        <Td  textAlign="left"><Text>Limites e horários</Text></Td>
                        <Td><Input type="checkbox" className="customizacao-listagem"  /></Td>
                        <Td><Input type="checkbox" className="customizacao-detalhes"  /></Td>
                        <Td><Input type="checkbox" className="customizacao-criar"  /></Td>
                        <Td><Input type="checkbox" className="customizacao-editar"  /></Td>
                        <Td><Input type="checkbox" className="customizacao-deletar"  /></Td> 
                    </Row> 
                    <Row className="customizacao d-none">
                        <Td  textAlign="left"><Text>Tarifas</Text></Td>
                        <Td><Input type="checkbox" className="customizacao-listagem"  /></Td>
                        <Td><Input type="checkbox" className="customizacao-detalhes"  /></Td>
                        <Td><Input type="checkbox" className="customizacao-criar"  /></Td>
                        <Td><Input type="checkbox" className="customizacao-editar"  /></Td>
                        <Td><Input type="checkbox" className="customizacao-deletar"  /></Td> 
                    </Row> 
                    <Row className="customizacao d-none">
                        <Td  textAlign="left"><Text>Tarifas personalizadas</Text></Td>
                        <Td><Input type="checkbox" className="customizacao-listagem"  /></Td>
                        <Td><Input type="checkbox" className="customizacao-detalhes"  /></Td>
                        <Td><Input type="checkbox" className="customizacao-criar"  /></Td>
                        <Td><Input type="checkbox" className="customizacao-editar"  /></Td>
                        <Td><Input type="checkbox" className="customizacao-deletar"  /></Td> 
                    </Row> 
                    <Row className="customizacao d-none">
                        <Td  textAlign="left"><Text>Conta</Text></Td>
                        <Td><Input type="checkbox" className="customizacao-listagem"  /></Td>
                        <Td><Input type="checkbox" className="customizacao-detalhes"  /></Td>
                        <Td><Input type="checkbox" className="customizacao-criar"  /></Td>
                        <Td><Input type="checkbox" className="customizacao-editar"  /></Td>
                        <Td><Input type="checkbox" className="customizacao-deletar"  /></Td> 
                    </Row>
                    <Row color="gray">
                        <Td  textAlign="left">
                            <Text onClick={()=>collapse('financeiro')} width="max-content" fontSize="1.2rem" fontWeight="bold">
                                Financeiro
                                {isCollapseFinaceiro ? <FaChevronUp/> : <FaChevronDown/>}
                            </Text>
                        </Td>
                        <Td><Input type="checkbox" className="listagem financeiro-listagem"  
                            onChange={(e)=>handleChange(e.target.checked, 'financeiro-listagem' )}/></Td>
                        <Td><Input type="checkbox" className="detalhes financeiro-detalhes"  
                            onChange={(e)=>handleChange(e.target.checked, 'financeiro-detalhes' )}/></Td>
                        <Td><Input type="checkbox" className="criar financeiro-criar"  
                            onChange={(e)=>handleChange(e.target.checked, 'financeiro-criar' )}/></Td>
                        <Td><Input type="checkbox" className="editar financeiro-editar"  
                            onChange={(e)=>handleChange(e.target.checked, 'financeiro-editar' )}/></Td>
                        <Td><Input type="checkbox" className="deletar financeiro-deletar"  
                            onChange={(e)=>handleChange(e.target.checked, 'financeiro-deletar' )}/></Td> 
                    </Row> 
                    <Row className="financeiro d-none">
                        <Td  textAlign="left"><Text>Entradas</Text></Td>
                        <Td><Input type="checkbox" className="financeiro-listagem"  /></Td>
                        <Td><Input type="checkbox" className="financeiro-detalhes"  /></Td>
                        <Td><Input type="checkbox" className="financeiro-criar"  /></Td>
                        <Td><Input type="checkbox" className="financeiro-editar"  /></Td>
                        <Td><Input type="checkbox" className="financeiro-deletar"  /></Td> 
                    </Row> 
                </TableBody>
            </Table>

            <ButtonContainer>
                <Button>CADASTRAR</Button>
            </ButtonContainer>
        </HomeContainer>
    )
}