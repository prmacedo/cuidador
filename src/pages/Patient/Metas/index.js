import PageHeader from '../../../components/PageHeader';
import React, { useState, useEffect, useContext } from 'react';
import AuthService from '../../../services/auth.service'
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "../../../components/Grid/GridItem.js";
import GridContainer from "../../../components/Grid/GridContainer.js";
import Tasks from "../../../components/Tasks/Tasks.js";
import CustomTabs from "../../../components/CustomTabs/CustomTabs.js"
import GoalsService from '../../../services/goals.service'

import './styles.css';


import PatientTask from "./general.js";


export default function Metas() {
    const [userData, setUserData] = useState();
    const [tasks, setTasks] = useState([]);


    useEffect(() => {
        (async () => {
            const { user } = AuthService.getCurrentUser()
            setUserData(user.first_name);
            
            const tasks_ = GoalsService.getAllGoalsByUserId(user.id);
            setTasks(tasks_)
        
        })();
    }, []);

    return (
        <div id="page-cuidadores" className="container">
            <PageHeader name={userData} />
           
            <main>
                <h1>Minhas metas</h1>

                <div className="tasks">
                    <div className="title">
                        <h2>Atividades</h2>
                    </div>

                    <div className="content">
                        <div className="in-progress">
                            <h3>Em andamento</h3>

                            <div>
                                <form action="">
                                    <div className="input-group">
                                        <input type="checkbox" name="task-25" id="task-1" />
                                        <label htmlFor="task-25">Task 1</label>
                                    </div>
                                    <div className="input-group">
                                        <input type="checkbox" name="task-11" id="task-1" />
                                        <label htmlFor="task-11">Task 1</label>
                                    </div>
                                    <div className="input-group">
                                        <input type="checkbox" name="task-12" id="task-1" />
                                        <label htmlFor="task-12">Task 1</label>
                                    </div>
                                    <div className="input-group">
                                        <input type="checkbox" name="task-13" id="task-1" />
                                        <label htmlFor="task-13">Task 1</label>
                                    </div>
                                    <div className="input-group">
                                        <input type="checkbox" name="task-14" id="task-1" />
                                        <label htmlFor="task-14">Task 1</label>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="completed">
                            <h3>Concluídas</h3>

                            <div>
                                <div className="input-group">
                                    <input type="checkbox" name="task-1" id="task-1" disabled checked/>
                                    <label htmlFor="task-1">Task 1</label>
                                </div>
                                <div className="input-group">
                                    <input type="checkbox" name="task-2" id="task-2" disabled checked/>
                                    <label htmlFor="task-2">Task 2</label>
                                </div>
                                <div className="input-group">
                                    <input type="checkbox" name="task-3" id="task-3" disabled checked/>
                                    <label htmlFor="task-3">Task 3</label>
                                </div>
                                <div className="input-group">
                                    <input type="checkbox" name="task-4" id="task-4" disabled checked/>
                                    <label htmlFor="task-4">Task 4</label>
                                </div>
                                <div className="input-group">
                                    <input type="checkbox" name="task-5" id="task-5" disabled checked/>
                                    <label htmlFor="task-5">Task 5</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>

    );
}