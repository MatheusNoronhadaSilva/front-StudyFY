// src/pages/Entrada.js
import * as C from './style'; // Certifique-se de que as estilizações estão corretas.
import React, { useEffect, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CampoCadernoVirtual = () => {
    const [notes, setNotes] = useState([]);
    const [currentNote, setCurrentNote] = useState('');
    const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);
    const alunoId = localStorage.getItem("userId") 

    // Busca as notas ao carregar a página
    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/v1/studyFy/cadernoVirtual/${alunoId}`);
            if (response.status === 200) {
                setNotes(response.data.data || []); // Atualiza o estado com as notas do servidor
            }
        } catch (error) {
            console.error('Erro ao buscar notas:', error);
        }
    };

    const handleSaveNote = async () => {
        try {
            if (selectedNoteIndex !== null) {
                // Atualiza nota existente
                const noteId = notes[selectedNoteIndex].id;
                console.log('oiooii');
                
                await axios.put(`http://localhost:8080/v1/studyFy/cadernoVirtual/${alunoId}/${noteId}`, { conteudo: currentNote });
            } else {
                // Cria uma nova nota
                console.log('nova nota');
                await axios.post('http://localhost:8080/v1/studyFy/cadernoVirtual', { conteudo: currentNote, alunoId });
            }

            fetchNotes(); // Atualiza as notas na interface
            setCurrentNote('');
            setSelectedNoteIndex(null);
        } catch (error) {
            console.error('Erro ao salvar a nota:', error);
        }
    };

    const handleEditNote = (index) => {
        setSelectedNoteIndex(index);
        setCurrentNote(notes[index].conteudo);
    };

    const handleCancelEdit = () => {
        setCurrentNote('');
        setSelectedNoteIndex(null);
    };

    const toggleMenu = (index) => {
        const note = document.querySelectorAll('.menu-suspenso')[index];
        note.classList.toggle('ativo');
    };

    const handleDeleteNote = async (index) => {
        try {
            const noteId = notes[index].id;
            await axios.delete(`http://localhost:8080/v1/studyFy/cadernoVirtual/${alunoId}/${noteId}`);
            fetchNotes(); // Atualiza as notas na interface
        } catch (error) {
            console.error('Erro ao deletar a nota:', error);
        }
    };

    return (
        <C.Container>
            <C.Header>
                <h1>Caderno virtual</h1>
                <p>Organize suas ideias e mantenha tudo em um só lugar</p>
            </C.Header>
            <C.Main>
                {/* Lista de Notas */}
                <C.NotesList>
                    <h3>Suas Notas</h3>
                    {notes.map((note, index) => (
                        <C.NotePreview key={index} onClick={() => handleEditNote(index)}>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: note.conteudo.length > 150
                                        ? `${note.conteudo.substring(0, 150)}...`
                                        : note.conteudo,
                                }}
                            />
                            <div style={{ display: 'flex', width: '100%', paddingTop: '5%', justifyContent: 'space-between' }}>
                                <div style={{display: 'flex', gap: '5%', width: '50%'}}>
                                <span>Nota {index + 1}</span>
                                <C.DeleteButton icon={faTrash} onClick={(e) => {
                                e.stopPropagation(); // Impede a propagação do evento para a função de edição
                                handleDeleteNote(index);
                            }}>
                                Deletar
                            </C.DeleteButton>
                                </div>
                               <span>{note.data_criacao}</span>
                            </div>
                        </C.NotePreview>
                    ))}
                </C.NotesList>

                {/* Editor de Notas */}
                <C.NoteEditor>
                    <h2>{selectedNoteIndex !== null ? 'Editar Nota' : 'Nova Nota'}</h2>
                    <ReactQuill
                        theme="snow"
                        value={currentNote}
                        onChange={setCurrentNote}
                        style={{ height: '70%' }}
                    />
                    <C.ButtonGroup>
                        <C.Button bg="#28a745" hover="#218838" onClick={handleSaveNote}>
                            {selectedNoteIndex !== null ? 'Atualizar Nota' : 'Salvar Nota'}
                        </C.Button>
                        <C.Button bg="#dc3545" hover="#c82333" onClick={handleCancelEdit}>
                            Cancelar
                        </C.Button>
                    </C.ButtonGroup>
                </C.NoteEditor>
            </C.Main>
        </C.Container>
    );
};

export default CampoCadernoVirtual;
