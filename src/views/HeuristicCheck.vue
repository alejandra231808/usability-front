<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-6">
                <!-- Coloca el iframe aquí -->
                <iframe src="https://latambena.app.deveniac.com/" style="width: 100%; height: 750px;"></iframe>
            </div>
            <div class="col-sm-6">
                <h1>Lista de chequeo - Heurísticas usabilidad</h1>
                <label for="exampleDataList" class="form-label">A continuación se presenta el Checklist de análisis
                    heurístico, con el fin de conocer qué principios heurísticos están cumpliendo dentro de su
                    plataforma.</label>
                <h4>H1 - Visibilidad del estado del sistema</h4>
                <div class="form-check form-switch">
                    <label for="switchH01P01" class="form-label">El sistema indica la sección donde se encuentra actualmente
                        el usuario: </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH01P01" v-model="H01P01">
                    <label class="form-check-label" for="switchH01P01">{{ H01P01 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH01P02" class="form-label">El sistema informa acerca del estado actual de un
                        proceso/tarea. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH01P02" v-model="H01P02">
                    <label class="form-check-label" for="switchH01P02">{{ H01P02 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH01P03" class="form-label">La transición de un estado a otro es fácilmente
                        perceptible. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH01P03" v-model="H01P03">
                    <label class="form-check-label" for="switchH01P03">{{ H01P03 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH01P04" class="form-label">El sistema muestra claramente las reacciones a las acciones
                        del usuario. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH01P04" v-model="H01P04">
                    <label class="form-check-label" for="switchH01P04">{{ H01P04 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH01P05" class="form-label">El sistema muestra claramente las reacciones a las acciones
                        del usuario. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH01P05" v-model="H01P05">
                    <label class="form-check-label" for="switchH01P05">{{ H01P05 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH01P06" class="form-label">Los tiempos de respuesta son razonables. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH01P06" v-model="H01P06">
                    <label class="form-check-label" for="switchH01P05">{{ H01P06 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH01P07" class="form-label">Una opción seleccionada se destaca claramente respecto a
                        otras. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH01P07" v-model="H01P07">
                    <label class="form-check-label" for="switchH01P05">{{ H01P07 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Observaciones</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>


                <!-- H2 AQUI -->

                <h4>H2 - Relación entre el sistema y el mundo real</h4>
                <div class="form-check form-switch">
                    <label for="switchH02P01" class="form-label">El sistema usa palabras, frases y conceptos familiares al
                        usuario. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH02P01" v-model="H02P01">
                    <label class="form-check-label" for="switchH02P01">{{ H02P01 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH02P02" class="form-label">La información es presentada de forma simple, natural y en
                        orden lógico. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH02P02" v-model="H02P02">
                    <label class="form-check-label" for="switchH02P02">{{ H02P02 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH02P03" class="form-label">El sistema está diseñado en el idioma que indica. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH02P03" v-model="H02P03">
                    <label class="form-check-label" for="switchH02P03">{{ H02P03 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH02P04" class="form-label">La secuencia de pasos de los procesos sigue el modelo metal
                        de los usuarios. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH02P04" v-model="H02P04">
                    <label class="form-check-label" for="switchH02P04">{{ H02P04 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH02P05" class="form-label">El sistema utiliza metáforas y controles de interfaz que
                        corresponden con la realidad. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH02P05" v-model="H02P05">
                    <label class="form-check-label" for="switchH02P05">{{ H02P05 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH02P06" class="form-label">Las metáforas son fáciles de comprender. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH02P06" v-model="H02P06">
                    <label class="form-check-label" for="switchH02P06">{{ H02P06 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH02P07" class="form-label">Los controles de interfaz importantes se presentan en la
                        pantalla. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH02P07" v-model="H02P07">
                    <label class="form-check-label" for="switchH02P07">{{ H02P07 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH02P08" class="form-label">En la aplicación se explican elementos complejos. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH02P08" v-model="H02P08">
                    <label class="form-check-label" for="switchH02P08">{{ H02P08 ? 'SÍ' : 'NO' }}</label>
                </div>

                <!-- H3 AQUI -->

                <h4>H3 - Control y libertad de usuario</h4>
                <div class="form-check form-switch">
                    <label for="switchH03P01" class="form-label">Es posible deshacer una acción cuando ésta es una función o
                        genera alguna operación. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH03P01" v-model="H03P01">
                    <label class="form-check-label" for="switchH03P01">{{ H03P01 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH03P02" class="form-label">En caso de realizar una transacción que posee varios pasos,
                        es posible volver a
                        pasos anteriores del proceso para modificarlos. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH03P02" v-model="H03P02">
                    <label class="form-check-label" for="switchH03P02">{{ H03P02 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH03P03" class="form-label">El sistema está diseñado en el idioma que indica. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH03P03" v-model="H03P03">
                    <label class="form-check-label" for="switchH03P03">{{ H03P03 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH03P04" class="form-label">Existe una salida de emergencia al realizar algún proceso
                        (Cancelar desconecta, va
                        al inicio). </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH03P04" v-model="H03P04">
                    <label class="form-check-label" for="switchH03P04">{{ H03P04 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH03P05" class="form-label">No se inician de forma automática acciones que no han sido
                        seleccionadas por el
                        usuario. Por ejemplo, la reproducción de un vídeo. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH03P05" v-model="H03P05">
                    <label class="form-check-label" for="switchH03P05">{{ H03P05 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH03P06" class="form-label">Es posible guardar la información relacionada a una
                        transacción, sea exitosa o no. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH03P06" v-model="H03P06">
                    <label class="form-check-label" for="switchH03P06">{{ H03P06 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH03P07" class="form-label">Existe un vínculo para regresar a la página de inicio.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH03P07" v-model="H03P07">
                    <label class="form-check-label" for="switchH03P07">{{ H03P07 ? 'SÍ' : 'NO' }}</label>
                </div>

                <!-- H4 AQUI -->

                <h4>H4 - Consistencia y Estándares</h4>
                <div class="form-check form-switch">
                    <label for="switchH04P01" class="form-label">Las etiquetas de vínculos tienen nombres iguales que los
                        títulos de la página a
                        los que redirige. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH04P01" v-model="H04P01">
                    <label class="form-check-label" for="switchH04P01">{{ H04P01 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH04P02" class="form-label">Las mismas acciones llevan a los mismos resultados. Por
                        ejemplo, al ingresar a
                        una sección desde distintas partes del sistema, éstas se dirigen a la misma. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH04P02" v-model="H04P02">
                    <label class="form-check-label" for="switchH04P02">{{ H04P02 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH04P03" class="form-label">Los elementos utilizados son similares en todo el sistema.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH04P03" v-model="H04P03">
                    <label class="form-check-label" for="switchH04P03">{{ H04P03 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH04P04" class="form-label">Los controles de interfaz de diferentes pantallas se
                        emplean siempre del mismo
                        modo. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH04P04" v-model="H04P04">
                    <label class="form-check-label" for="switchH04P04">{{ H04P04 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH04P05" class="form-label">El uso del vocabulario es consistente en todo el sistema.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH04P05" v-model="H04P05">
                    <label class="form-check-label" for="switchH04P05">{{ H04P05 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH04P06" class="form-label">La misma información se muestra de la misma forma en todo
                        el sistema. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH04P06" v-model="H04P06">
                    <label class="form-check-label" for="switchH04P06">{{ H04P06 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH04P07" class="form-label">La información está estructurada de forma similar en todo
                        el sistema.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH04P07" v-model="H04P07">
                    <label class="form-check-label" for="switchH04P07">{{ H04P07 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH04P08" class="form-label">Las interfaces que conforman el sistema tienen un aspecto
                        visual coherente.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH04P08" v-model="H04P08">
                    <label class="form-check-label" for="switchH04P08">{{ H04P08 ? 'SÍ' : 'NO' }}</label>
                </div>
                <div class="form-check form-switch">
                    <label for="switchH04P09" class="form-label">En situaciones similares se repiten secuencias de acciones.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH04P09" v-model="H04P09">
                    <label class="form-check-label" for="switchH04P09">{{ H04P09 ? 'SÍ' : 'NO' }}</label>
                </div>
                <div class="form-check form-switch">
                    <label for="switchH04P010" class="form-label">Los símbolos utilizados son comprensibles y facilitan la
                        interacción con el
                        sistema.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH04P010" v-model="H04P010">
                    <label class="form-check-label" for="switchH04P010">{{ H04P010 ? 'SÍ' : 'NO' }}</label>
                </div>
                <div class="form-check form-switch">
                    <label for="switchH04P011" class="form-label">Se usan colores estándares para vínculos (rojo para
                        advertencia, verde para
                        acción exitosa).
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH04P011" v-model="H04P011">
                    <label class="form-check-label" for="switchH04P011">{{ H04P011 ? 'SÍ' : 'NO' }}</label>
                </div>
                <div class="form-check form-switch">
                    <label for="switchH04P012" class="form-label">Se siguen los estándares establecidos para los símbolos
                        utilizados (equis para
                        cancelar, etc.).
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH04P012" v-model="H04P012">
                    <label class="form-check-label" for="switchH04P012">{{ H04P012 ? 'SÍ' : 'NO' }}</label>
                </div>
                <div class="form-check form-switch">
                    <label for="switchH04P013" class="form-label">La ubicación de las barras de navegación, herramientas de
                        búsquedas y controles
                        (botones) siguen los estándares comunes establecidos.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH04P013" v-model="H04P013">
                    <label class="form-check-label" for="switchH04P013">{{ H04P013 ? 'SÍ' : 'NO' }}</label>
                </div>

                <!-- H5 AQUI -->

                <h4>H5 - Prevención de Errores</h4>
                <div class="form-check form-switch">
                    <label for="switchH05P01" class="form-label">Se le pide confirmación al usuario antes de realizar una
                        acción crítica (eliminar,
                        aceptar, etc). </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH05P01" v-model="H05P01">
                    <label class="form-check-label" for="switchH05P01">{{ H05P01 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH05P02" class="form-label">El sistema provee mensajes fáciles de entender que
                        previenen posibles errores. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH05P02" v-model="H05P02">
                    <label class="form-check-label" for="switchH05P02">{{ H05P02 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH05P03" class="form-label">El sistema ofrece métodos de selección a los usuarios como
                        alternativas para el
                        ingreso datos.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH05P03" v-model="H05P03">
                    <label class="form-check-label" for="switchH05P03">{{ H05P03 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH05P04" class="form-label">Los campos de entrada de datos contienen valores por
                        defecto cuando
                        corresponde. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH05P04" v-model="H05P04">
                    <label class="form-check-label" for="switchH05P04">{{ H05P04 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH05P05" class="form-label">Todos los datos de entrada son validados.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH05P05" v-model="H05P05">
                    <label class="form-check-label" for="switchH05P05">{{ H05P05 ? 'SÍ' : 'NO' }}</label>
                </div>

                <!-- H6 AQUI -->

                <h4>H6 - Minimizar la carga de memoria del usuario</h4>
                <div class="form-check form-switch">
                    <label for="switchH06P01" class="form-label">Las opciones y/o funciones son fáciles de encontrar.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH06P01" v-model="H06P01">
                    <label class="form-check-label" for="switchH06P01">{{ H06P01 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH06P02" class="form-label">Los principales controles de interfaz, están siempre
                        disponibles, visibles y son de
                        fácil acceso. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH06P02" v-model="H06P02">
                    <label class="form-check-label" for="switchH06P02">{{ H06P02 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH06P03" class="form-label">Los campos de entrada de datos ya llenos mantienen la
                        información siempre
                        recordada.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH06P03" v-model="H06P03">
                    <label class="form-check-label" for="switchH06P03">{{ H06P03 ? 'SÍ' : 'NO' }}</label>
                </div>

                <!-- H7 AQUI -->

                <h4>H7 - Flexibilidad y eficiencia de uso</h4>
                <div class="form-check form-switch">
                    <label for="switchH07P01" class="form-label">Existen atajos para realizar tareas frecuentes.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH07P01" v-model="H07P01">
                    <label class="form-check-label" for="switchH07P01">{{ H07P01 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH07P02" class="form-label">El sistema es personalizable, de acuerdo a las necesidades,
                        características,
                        preferencias personales, etc., de los usuarios. </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH07P02" v-model="H07P02">
                    <label class="form-check-label" for="switchH07P02">{{ H07P02 ? 'SÍ' : 'NO' }}</label>
                </div>

                <div class="form-check form-switch">
                    <label for="switchH07P03" class="form-label">El sistema no pide volver a ingresar información que ya ha
                        sido solicitada con
                        anterioridad.
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="switchH07P03" v-model="H07P03">
                    <label class="form-check-label" for="switchH07P03">{{ H07P03 ? 'SÍ' : 'NO' }}</label>
                </div>
                
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Observaciones</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="button" class="btn btn-primary btn-lg">Enviar</button>
            </div>

        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
// Variable para controlar el estado del checkbox
const H01P01 = ref(false);
const H01P02 = ref(false);
const H01P03 = ref(false);
const H01P04 = ref(false);
const H01P05 = ref(false);
const H01P06 = ref(false);
const H01P07 = ref(false);

const H02P01 = ref(false);
const H02P02 = ref(false);
const H02P03 = ref(false);
const H02P04 = ref(false);
const H02P05 = ref(false);
const H02P06 = ref(false);
const H02P07 = ref(false);
const H02P08 = ref(false);

const H03P01 = ref(false);
const H03P02 = ref(false);
const H03P03 = ref(false);
const H03P04 = ref(false);
const H03P05 = ref(false);
const H03P06 = ref(false);
const H03P07 = ref(false);

</script>