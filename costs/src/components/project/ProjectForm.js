import styles from './ProjectForm.module.css';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import { useEffect, useState } from 'react';   

function ProjectForm({handleSubmit, btnText, projectData}) {

    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || {});

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data);
            if(!project.category) {
                setProject({
                    ...project,
                    category: {
                        id: data[0]?.id,
                        name: data[0]?.name,
                    },
                });
            };
        })
        .catch(err => console.log(err));
    }, [project]);

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(project);
    };

    function handleChange(e) {
        setProject({...project, [e.target.name]: e.target.value });
    };

    function handleCategory(e) {
        setProject({...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        },
    });
    };

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type="text"
                text="Nome do projeto"
                name="name"
                handleOnChange={handleChange}
                placeholder="Insira o nome do projeto"
                value={project.name ? project.name : ''}
            />
            <Input 
                type="number"
                text="Orçamento do projeto"
                name="budget"
                handleOnChange={handleChange}
                placeholder="Insira o orçamento total"
                value={project.budget ? project.budget : ''}
            />
            <Select 
                name="category_id" 
                text="Selecione a categoria" 
                options={categories} 
                handleOnChange={handleCategory}
                value={project.category ? project.category.id : ''}
                />
            <SubmitButton text={btnText} />
        </form>
    );
};

export default ProjectForm