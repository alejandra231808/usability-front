<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-6">
                <!-- Coloca el iframe aquí
                <iframe :src="url" style="width: 100%; height: 750px;"></iframe> -->
            </div>
            <div class="col-sm-12">
                <p></p>
                <h1>Lista de chequeo - Heurísticas usabilidad{{ owner.name }}</h1>
                <label for="exampleDataList" class="form-label">A continuación se presenta el Checklist de análisis
                    heurístico, con el fin de conocer qué principios heurísticos están cumpliendo dentro de su
                    plataforma.</label>
                <div class="container mt-5">
                    <!-- Enlace bonito con clases de Bootstrap -->
                    <p>Ve al sigueinte enlace para realizar evaluacion</p>
                    <p style="color:blue;">{{ url }}</p>
                    <a :href="url" class="btn btn-primary btn-lg" target="_blank">Ir al enlace</a>
                </div>
                <h4>H1 - Visibilidad del estado del sistema</h4>
                <div class="form-check form-switch">
                    <label for="switchH01P01" class="form-label">El sistema indica la sección donde se encuentra actualmente
                        el usuario: </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH01P01"
                        v-model="Heuristics.H01P01">
                    <label class="form-check-label" for="switchH01P01">{{ Heuristics.H01P01 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH01P02" class="form-label">El sistema informa acerca del estado actual de un
                        proceso/tarea. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH01P02"
                        v-model="Heuristics.H01P02">
                    <label class="form-check-label" for="switchH01P02">{{ Heuristics.H01P02 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH01P03" class="form-label">La transición de un estado a otro es fácilmente
                        perceptible. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH01P03"
                        v-model="Heuristics.H01P03">
                    <label class="form-check-label" for="switchH01P03">{{ Heuristics.H01P03 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH01P04" class="form-label">El sistema muestra claramente las reacciones a las acciones
                        del usuario. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH01P04"
                        v-model="Heuristics.H01P04">
                    <label class="form-check-label" for="switchH01P04">{{ Heuristics.H01P04 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH01P05" class="form-label">El sistema muestra claramente las reacciones a las acciones
                        del usuario. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH01P05"
                        v-model="Heuristics.H01P05">
                    <label class="form-check-label" for="switchH01P05">{{ Heuristics.H01P05 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH01P06" class="form-label">Los tiempos de respuesta son razonables. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH01P06"
                        v-model="Heuristics.H01P06">
                    <label class="form-check-label" for="switchH01P05">{{ Heuristics.H01P06 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH01P07" class="form-label">Una opción seleccionada se destaca claramente respecto a
                        otras. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH01P07"
                        v-model="Heuristics.H01P07">
                    <label class="form-check-label" for="switchH01P05">{{ Heuristics.H01P07 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Observaciones</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                        v-model="Heuristics.OBSERVACIONH1"></textarea>
                </div>


                <!-- H2 AQUI -->

                <h4>H2 - Relación entre el sistema y el mundo real</h4>
                <div class="form-check form-switch">
                    <label for="switchH02P01" class="form-label">El sistema usa palabras, frases y conceptos familiares al
                        usuario. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH02P01"
                        v-model="Heuristics.H02P01">
                    <label class="form-check-label" for="switchH02P01">{{ Heuristics.H02P01 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH02P02" class="form-label">La información es presentada de forma simple, natural y en
                        orden lógico. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH02P02"
                        v-model="Heuristics.H02P02">
                    <label class="form-check-label" for="switchH02P02">{{ Heuristics.H02P02 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH02P03" class="form-label">El sistema está diseñado en el idioma que indica. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH02P03"
                        v-model="Heuristics.H02P03">
                    <label class="form-check-label" for="switchH02P03">{{ Heuristics.H02P03 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH02P04" class="form-label">La secuencia de pasos de los procesos sigue el modelo metal
                        de los usuarios. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH02P04"
                        v-model="Heuristics.H02P04">
                    <label class="form-check-label" for="switchH02P04">{{ Heuristics.H02P04 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH02P05" class="form-label">El sistema utiliza metáforas y controles de interfaz que
                        corresponden con la realidad. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH02P05"
                        v-model="Heuristics.H02P05">
                    <label class="form-check-label" for="switchH02P05">{{ Heuristics.H02P05 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH02P06" class="form-label">Las metáforas son fáciles de comprender. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH02P06"
                        v-model="Heuristics.H02P06">
                    <label class="form-check-label" for="switchH02P06">{{ Heuristics.H02P06 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH02P07" class="form-label">Los controles de interfaz importantes se presentan en la
                        pantalla. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH02P07"
                        v-model="Heuristics.H02P07">
                    <label class="form-check-label" for="switchH02P07">{{ Heuristics.H02P07 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH02P08" class="form-label">En la aplicación se explican elementos complejos. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH02P08"
                        v-model="Heuristics.H02P08">
                    <label class="form-check-label" for="switchH02P08">{{ Heuristics.H02P08 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Observaciones</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                        v-model="Heuristics.OBSERVACIONH2"></textarea>
                </div>

                <!-- H3 AQUI -->

                <h4>H3 - Control y libertad de usuario</h4>
                <div class="form-check form-switch">
                    <label for="switchH03P01" class="form-label">Es posible deshacer una acción cuando ésta es una función o
                        genera alguna operación. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH03P01"
                        v-model="Heuristics.H03P01">
                    <label class="form-check-label" for="switchH03P01">{{ Heuristics.H03P01 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH03P02" class="form-label">En caso de realizar una transacción que posee varios pasos,
                        es posible volver a
                        pasos anteriores del proceso para modificarlos. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH03P02"
                        v-model="Heuristics.H03P02">
                    <label class="form-check-label" for="switchH03P02">{{ Heuristics.H03P02 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH03P04" class="form-label">Existe una salida de emergencia al realizar algún proceso
                        (Cancelar desconecta, va
                        al inicio). </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH03P04"
                        v-model="Heuristics.H03P03">
                    <label class="form-check-label" for="switchH03P04">{{ Heuristics.H03P03 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH03P05" class="form-label">No se inician de forma automática acciones que no han sido
                        seleccionadas por el
                        usuario. Por ejemplo, la reproducción de un vídeo. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH03P05"
                        v-model="Heuristics.H03P04">
                    <label class="form-check-label" for="switchH03P05">{{ Heuristics.H03P04 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH03P06" class="form-label">Es posible guardar la información relacionada a una
                        transacción, sea exitosa o no. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH03P06"
                        v-model="Heuristics.H03P05">
                    <label class="form-check-label" for="switchH03P06">{{ Heuristics.H03P05 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH03P07" class="form-label">Existe un vínculo para regresar a la página de inicio.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH03P07"
                        v-model="Heuristics.H03P06">
                    <label class="form-check-label" for="switchH03P07">{{ Heuristics.H03P06 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Observaciones</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                        v-model="Heuristics.OBSERVACIONH3"></textarea>
                </div>

                <!-- H4 AQUI -->

                <h4>H4 - Consistencia y Estándares</h4>
                <div class="form-check form-switch">
                    <label for="switchH04P01" class="form-label">Las etiquetas de vínculos tienen nombres iguales que los
                        títulos de la página a
                        los que redirige. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH04P01"
                        v-model="Heuristics.H04P01">
                    <label class="form-check-label" for="switchH04P01">{{ Heuristics.H04P01 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH04P02" class="form-label">Las mismas acciones llevan a los mismos resultados. Por
                        ejemplo, al ingresar a
                        una sección desde distintas partes del sistema, éstas se dirigen a la misma. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH04P02"
                        v-model="Heuristics.H04P02">
                    <label class="form-check-label" for="switchH04P02">{{ Heuristics.H04P02 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH04P03" class="form-label">Los elementos utilizados son similares en todo el sistema.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH04P03"
                        v-model="Heuristics.H04P03">
                    <label class="form-check-label" for="switchH04P03">{{ Heuristics.H04P03 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH04P04" class="form-label">Los controles de interfaz de diferentes pantallas se
                        emplean siempre del mismo
                        modo. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH04P04"
                        v-model="Heuristics.H04P04">
                    <label class="form-check-label" for="switchH04P04">{{ Heuristics.H04P04 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH04P05" class="form-label">El uso del vocabulario es consistente en todo el sistema.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH04P05"
                        v-model="Heuristics.H04P05">
                    <label class="form-check-label" for="switchH04P05">{{ Heuristics.H04P05 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH04P06" class="form-label">La misma información se muestra de la misma forma en todo
                        el sistema. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH04P06"
                        v-model="Heuristics.H04P06">
                    <label class="form-check-label" for="switchH04P06">{{ Heuristics.H04P06 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH04P07" class="form-label">La información está estructurada de forma similar en todo
                        el sistema.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH04P07"
                        v-model="Heuristics.H04P07">
                    <label class="form-check-label" for="switchH04P07">{{ Heuristics.H04P07 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH04P08" class="form-label">Las interfaces que conforman el sistema tienen un aspecto
                        visual coherente.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH04P08"
                        v-model="Heuristics.H04P08">
                    <label class="form-check-label" for="switchH04P08">{{ Heuristics.H04P08 ? 'SÍ' : 'NO' }}</label>
                </div>
                <div class="form-check form-switch">
                    <label for="switchH04P09" class="form-label">En situaciones similares se repiten secuencias de acciones.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH04P09"
                        v-model="Heuristics.H04P09">
                    <label class="form-check-label" for="switchH04P09">{{ Heuristics.H04P09 ? 'SÍ' : 'NO' }}</label>
                </div>
                <div class="form-check form-switch">
                    <label for="switchH04P010" class="form-label">Los símbolos utilizados son comprensibles y facilitan la
                        interacción con el
                        sistema.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH04P010"
                        v-model="Heuristics.H04P10">
                    <label class="form-check-label" for="switchH04P010">{{ Heuristics.H04P10 ? 'SÍ' : 'NO' }}</label>
                </div>
                <div class="form-check form-switch">
                    <label for="switchH04P011" class="form-label">Se usan colores estándares para vínculos (rojo para
                        advertencia, verde para
                        acción exitosa).
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH04P011"
                        v-model="Heuristics.H04P11">
                    <label class="form-check-label" for="switchH04P011">{{ Heuristics.H04P11 ? 'SÍ' : 'NO' }}</label>
                </div>
                <div class="form-check form-switch">
                    <label for="switchH04P12" class="form-label">Se siguen los estándares establecidos para los símbolos
                        utilizados (equis para
                        cancelar, etc.).
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH04P12"
                        v-model="Heuristics.H04P12">
                    <label class="form-check-label" for="switchH04P12">{{ Heuristics.H04P12 ? 'SÍ' : 'NO' }}</label>
                </div>
                <div class="form-check form-switch">
                    <label for="switchH04P13" class="form-label">La ubicación de las barras de navegación, herramientas de
                        búsquedas y controles
                        (botones) siguen los estándares comunes establecidos.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH04P13"
                        v-model="Heuristics.H04P13">
                    <label class="form-check-label" for="switchH04P13">{{ Heuristics.H04P13 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Observaciones</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                        v-model="Heuristics.OBSERVACIONH4"></textarea>
                </div>

                <!-- H5 AQUI -->

                <h4>H5 - Prevención de Errores</h4>
                <div class="form-check form-switch">
                    <label for="switchH05P01" class="form-label">Se le pide confirmación al usuario antes de realizar una
                        acción crítica (eliminar,
                        aceptar, etc). </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH05P01"
                        v-model="Heuristics.H05P01">
                    <label class="form-check-label" for="switchH05P01">{{ Heuristics.H05P01 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH05P02" class="form-label">El sistema provee mensajes fáciles de entender que
                        previenen posibles errores. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH05P02"
                        v-model="Heuristics.H05P02">
                    <label class="form-check-label" for="switchH05P02">{{ Heuristics.H05P02 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH05P03" class="form-label">El sistema ofrece métodos de selección a los usuarios como
                        alternativas para el
                        ingreso datos.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH05P03"
                        v-model="Heuristics.H05P03">
                    <label class="form-check-label" for="switchH05P03">{{ Heuristics.H05P03 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH05P04" class="form-label">Los campos de entrada de datos contienen valores por
                        defecto cuando
                        corresponde. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH05P04"
                        v-model="Heuristics.H05P04">
                    <label class="form-check-label" for="switchH05P04">{{ Heuristics.H05P04 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH05P05" class="form-label">Todos los datos de entrada son validados.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH05P05"
                        v-model="Heuristics.H05P05">
                    <label class="form-check-label" for="switchH05P05">{{ Heuristics.H05P05 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Observaciones</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                        v-model="Heuristics.OBSERVACIONH5"></textarea>
                </div>

                <!-- H6 AQUI -->

                <h4>H6 - Minimizar la carga de memoria del usuario</h4>
                <div class="form-check form-switch">
                    <label for="switchH06P01" class="form-label">Las opciones y/o funciones son fáciles de encontrar.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH06P01"
                        v-model="Heuristics.H06P01">
                    <label class="form-check-label" for="switchH06P01">{{ Heuristics.H06P01 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH06P02" class="form-label">Los principales controles de interfaz, están siempre
                        disponibles, visibles y son de
                        fácil acceso. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH06P02"
                        v-model="Heuristics.H06P02">
                    <label class="form-check-label" for="switchH06P02">{{ Heuristics.H06P02 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH06P03" class="form-label">Los campos de entrada de datos ya llenos mantienen la
                        información siempre
                        recordada.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH06P03"
                        v-model="Heuristics.H06P03">
                    <label class="form-check-label" for="switchH06P03">{{ Heuristics.H06P03 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Observaciones</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                        v-model="Heuristics.OBSERVACIONH6"></textarea>
                </div>

                <!-- H7 AQUI -->

                <h4>H7 - Flexibilidad y eficiencia de uso</h4>
                <div class="form-check form-switch">
                    <label for="switchH07P01" class="form-label">Existen atajos para realizar tareas frecuentes.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH07P01"
                        v-model="Heuristics.H07P01">
                    <label class="form-check-label" for="switchH07P01">{{ Heuristics.H07P01 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH07P02" class="form-label">El sistema es personalizable, de acuerdo a las necesidades,
                        características,
                        preferencias personales, etc., de los usuarios. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH07P02"
                        v-model="Heuristics.H07P02">
                    <label class="form-check-label" for="switchH07P02">{{ Heuristics.H07P02 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH07P03" class="form-label">El sistema no pide volver a ingresar información que ya ha
                        sido solicitada con
                        anterioridad.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH07P03"
                        v-model="Heuristics.H07P03">
                    <label class="form-check-label" for="switchH07P03">{{ Heuristics.H07P03 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH07P04" class="form-label">Las acciones que realiza el usuario toman mucho tiempo.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH07P04"
                        v-model="Heuristics.H07P04">
                    <label class="form-check-label" for="switchH07P04">{{ Heuristics.H07P04 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH07P05" class="form-label">El sistema informa al usuario si la ejecución de una acción
                        requiere mucho tiempo.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH07P05"
                        v-model="Heuristics.H07P05">
                    <label class="form-check-label" for="switchH07P05">{{ Heuristics.H07P05 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH07P06" class="form-label">Al rellenar un campo, las opciones disponibles se pueden
                        seleccionar sin tener
                        que escribirlas.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH07P06"
                        v-model="Heuristics.H07P06">
                    <label class="form-check-label" for="switchH07P06">{{ Heuristics.H07P06 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH07P07" class="form-label">La herramienta de búsqueda es visible en todo el sistema.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH07P07"
                        v-model="Heuristics.H07P07">
                    <label class="form-check-label" for="switchH07P07">{{ Heuristics.H07P07 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Observaciones</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                        v-model="Heuristics.OBSERVACIONH7"></textarea>
                </div>

                <!-- H8 AQUI -->

                <h4>H8 - Diseño estético y minimalista</h4>
                <div class="form-check form-switch">
                    <label for="switchH08P01" class="form-label">La interfaz del sistema es simple.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH08P01"
                        v-model="Heuristics.H08P01">
                    <label class="form-check-label" for="switchH08P01">{{ Heuristics.H08P01 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH08P02" class="form-label">La interfaz del sistema está sobrecargada de información y
                        elementos que
                        distraen al usuario.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH08P02"
                        v-model="Heuristics.H08P02">
                    <label class="form-check-label" for="switchH08P02">{{ Heuristics.H08P02 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH08P03" class="form-label">Las alternativas que el usuario necesita para realizar una
                        tarea están visibles.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH08P03"
                        v-model="Heuristics.H08P03">
                    <label class="form-check-label" for="switchH08P03">{{ Heuristics.H08P03 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH08P04" class="form-label">La información presentada es simple, concisa y clara.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH08P04"
                        v-model="Heuristics.H08P04">
                    <label class="form-check-label" for="switchH08P04">{{ Heuristics.H08P04 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH08P05" class="form-label">La información visible es suficiente para realizar alguna
                        acción.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH08P05"
                        v-model="Heuristics.H08P05">
                    <label class="form-check-label" for="switchH08P05">{{ Heuristics.H08P05 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH08P06" class="form-label">Hay iconos o elementos gráficos abstractos.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH08P06"
                        v-model="Heuristics.H08P06">
                    <label class="form-check-label" for="switchH08P06">{{ Heuristics.H08P06 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH08P07" class="form-label">Hay iconos, controles, menús, gráficos, textos u otros
                        elementos redundantes.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH08P07"
                        v-model="Heuristics.H08P07">
                    <label class="form-check-label" for="switchH08P07">{{ Heuristics.H08P07 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH08P08" class="form-label">Hay elementos exclusivamente ornamentales.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH08P08"
                        v-model="Heuristics.H08P08">
                    <label class="form-check-label" for="switchH08P08">{{ Heuristics.H08P08 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH08P09" class="form-label">El sistema presenta información repetida.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH08P09"
                        v-model="Heuristics.H08P09">
                    <label class="form-check-label" for="switchH08P09">{{ Heuristics.H08P09 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH08P010" class="form-label">Los colores utilizados dan un contraste adecuado.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH08P010"
                        v-model="Heuristics.H08P10">
                    <label class="form-check-label" for="switchH08P010">{{ Heuristics.H08P10 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH08P011" class="form-label">Los elementos/secciones del sistema están distribuidos
                        correctamente en todo el
                        sistema.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH08P011"
                        v-model="Heuristics.H08P11">
                    <label class="form-check-label" for="switchH08P011">{{ Heuristics.H08P11 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Observaciones</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                        v-model="Heuristics.OBSERVACIONH8"></textarea>
                </div>

                <!-- H9 AQUI -->

                <h4>H9 – Ayuda al usuario para reconocer, diagnosticar y recuperarse de errores</h4>
                <div class="form-check form-switch">
                    <label for="switchH09P01" class="form-label">Los mensajes de error son compresibles, escritos en
                        lenguaje común, sin códigos
                        o palabras técnicas.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH09P01"
                        v-model="Heuristics.H09P01">
                    <label class="form-check-label" for="switchH09P01">{{ Heuristics.H09P01 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH09P02" class="form-label">Los mensajes de error indican la causa del error.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH09P02"
                        v-model="Heuristics.H09P02">
                    <label class="form-check-label" for="switchH09P02">{{ Heuristics.H09P02 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH09P03" class="form-label">Los mensajes de error orientan al usuario para solucionar
                        el problema.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH09P03"
                        v-model="Heuristics.H09P03">
                    <label class="form-check-label" for="switchH09P03">{{ Heuristics.H09P03 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH09P04" class="form-label">Los mensajes de error utilizan una terminología y diseño
                        consistentes.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH09P04"
                        v-model="Heuristics.H09P04">
                    <label class="form-check-label" for="switchH09P04">{{ Heuristics.H09P04 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH09P05" class="form-label">Los mensajes de error están escritos en una forma
                        constructiva, de tal manera que
                        no atribuyen la culpa ni ofenden al usuario
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH09P05"
                        v-model="Heuristics.H09P05">
                    <label class="form-check-label" for="switchH09P05">{{ Heuristics.H09P05 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH09P06" class="form-label">Los mensajes de error usan palabras violentas u hostiles.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH09P06"
                        v-model="Heuristics.H09P06">
                    <label class="form-check-label" for="switchH09P06">{{ Heuristics.H09P06 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Observaciones</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                        v-model="Heuristics.OBSERVACIONH9"></textarea>
                </div>

                <!-- H10 AQUI -->

                <h4>H10 – Ayuda y Documentación</h4>
                <div class="form-check form-switch">
                    <label for="switchH010P01" class="form-label">El sistema ofrece una ayuda clara y simple.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH010P01"
                        v-model="Heuristics.H10P01">
                    <label class="form-check-label" for="switchH010P01">{{ Heuristics.H10P01 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH010P02" class="form-label">La ayuda esta expresada en el lenguaje del usuario, libre
                        de jergas y modismos.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH010P02"
                        v-model="Heuristics.H10P02">
                    <label class="form-check-label" for="switchH010P02">{{ Heuristics.H10P02 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH010P03" class="form-label">La ayuda es fácil de encontrar, entender y aplicar.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH010P03"
                        v-model="Heuristics.H10P03">
                    <label class="form-check-label" for="switchH010P03">{{ Heuristics.H10P03 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH010P04" class="form-label">La ayuda siempre está visible y disponible.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH010P04"
                        v-model="Heuristics.H10P04">
                    <label class="form-check-label" for="switchH010P04">{{ Heuristics.H10P04 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH010P05" class="form-label">La estructura de la información de la ayuda se distingue
                        fácilmente.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH010P05"
                        v-model="Heuristics.H10P05">
                    <label class="form-check-label" for="switchH010P05">{{ Heuristics.H10P05 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH010P06" class="form-label">Las instrucciones de ayuda siguen la secuencia de acciones
                        a realizar por el
                        usuario para alcanzar una tarea.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH010P06"
                        v-model="Heuristics.H10P06">
                    <label class="form-check-label" for="switchH010P06">{{ Heuristics.H10P06 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH010P07" class="form-label">La interfaz de la ayuda es consistente con la interfaz de
                        todo el sistema.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH010P07"
                        v-model="Heuristics.H10P07">
                    <label class="form-check-label" for="switchH010P07">{{ Heuristics.H10P07 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH010P08" class="form-label">En la ayuda la información es fácil de encontrar.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH010P08"
                        v-model="Heuristics.H10P08">
                    <label class="form-check-label" for="switchH010P08">{{ Heuristics.H10P08 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH010P09" class="form-label">En el sistema existe ayuda contextual que guía al usuario
                        respecto al uso de los
                        elementos.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH010P09"
                        v-model="Heuristics.H10P09">
                    <label class="form-check-label" for="switchH010P09">{{ Heuristics.H10P09 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Observaciones</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                        v-model="Heuristics.OBSERVACIONH10"></textarea>
                </div>
                <button type="button" class="btn btn-primary btn-lg" @click="enviarinfo">Enviar</button>
            </div>

        </div>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios';
const route = useRoute();
const router = useRouter();
onMounted(() => {
    getownerInfo(route.params.idowner);
})
// Variable para controlar el estado del checkbox
const Heuristics = ref(
    {
        owner_id: 0,
        H01P01: false,
        H01P02: false,
        H01P03: false,
        H01P04: false,
        H01P05: false,
        H01P06: false,
        H01P07: false,

        H02P01: false,
        H02P02: false,
        H02P03: false,
        H02P04: false,
        H02P05: false,
        H02P06: false,
        H02P07: false,
        H02P08: false,

        H03P01: false,
        H03P02: false,
        H03P03: false,
        H03P04: false,
        H03P05: false,
        H03P06: false,

        H04P01: false,
        H04P02: false,
        H04P03: false,
        H04P04: false,
        H04P05: false,
        H04P06: false,
        H04P07: false,
        H04P08: false,
        H04P09: false,
        H04P10: false,
        H04P11: false,
        H04P12: false,
        H04P13: false,

        H05P01: false,
        H05P02: false,
        H05P03: false,
        H05P04: false,
        H05P05: false,
        H06P01: false,
        H06P02: false,
        H06P03: false,
        H07P01: false,
        H07P02: false,
        H07P03: false,
        H07P04: false,
        H07P05: false,
        H07P06: false,
        H07P07: false,
        H08P01: false,
        H08P02: false,
        H08P03: false,
        H08P04: false,
        H08P05: false,
        H08P06: false,
        H08P07: false,
        H08P08: false,
        H08P09: false,
        H08P10: false,
        H08P11: false,

        H09P01: false,
        H09P02: false,
        H09P03: false,
        H09P04: false,
        H09P05: false,
        H09P06: false,
        H10P01: false,
        H10P02: false,
        H10P03: false,
        H10P04: false,
        H10P05: false,
        H10P06: false,
        H10P07: false,
        H10P08: false,
        H10P09: false,
        OBSERVACIONH1: "",
        OBSERVACIONH2: "",
        OBSERVACIONH3: "",
        OBSERVACIONH4: "",
        OBSERVACIONH5: "",
        OBSERVACIONH6: "",
        OBSERVACIONH7: "",
        OBSERVACIONH8: "",
        OBSERVACIONH9: "",
        OBSERVACIONH10: ""
    }
)



const enviarinfo = async () => {
    console.log("pruebaenvio", route.params.idowner);

    Heuristics.value.owner_id = route.params.idowner;
    console.log(Heuristics.value);
    await axios.post("http://127.0.0.1:5000/heuristics", Heuristics.value).then(response => {
        console.log(response)
        router.push('/encuestaterminada')
    }).catch(err => {
        console.log(err)
    }
    );
}
const owner = ref({
    name: '',
    url: '',
    description: '',
});
const url = ref('');
const getownerInfo = async (id) => {
    owner.value = await axios.get(`http://127.0.0.1:5000/owners/${id}`);
    console.log(owner.value.data.url);
    url.value = owner.value.data.url
    console.log(url);
}

</script>