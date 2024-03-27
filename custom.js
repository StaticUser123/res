let template_css = `https://cdn.jsdelivr.net/gh/StaticUser123/res@main/cv-cv.css`
    let sections_catalogue = {
        '0':{
            'form':
            `
                <div class="cv-flexbox" block_id="{{block_id}}">
                    <input type="text"  input_ref="{{input_ref}}">
                    <button block_id_ref="{{block_id_ref}}">
                    </button>
                </div>
            `,
            'cv':
            `
            <li cv_ref="{{cv_ref}}">------------</li>
            `
        },
        //Speciality
        'spe':{
            'form':
            `

            <div class="accordion-item" block_id="{{block_id}}">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" data-bs-toggle="collapse"
                        data-bs-target="#content-accordion-1">
                    </button>
                </h2>
                <div id="content-accordion-1" class="accordion-collapse collapse" data-bs-parent="#faqlist">

                    <div class="cv-flexbox">
                        <input type="text" placeholder="Speciality" input_ref="{{input_ref}}">
                        <button block_id_ref="{{block_id_ref}}">
                        </button>
                    </div>

                </div>
            </div>
            `,
            'cv':
            `
            <div class="nrule" cv_block_id="{{cv_block_id}}"><span>|</span>
                <p id="Speciality" cv_ref="{{cv_ref}}">Speciality</p>
            </div>
            `
        },
        //Area Of Expertise
        'aoe':{
            'form':
            `

            <div class="accordion-item" block_id="{{block_id}}">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" data-bs-toggle="collapse"
                        data-bs-target="#content-accordion-1">
                    </button>
                </h2>
                <div id="content-accordion-1" class="accordion-collapse collapse" data-bs-parent="#faqlist">

                    <div class="cv-blockbox">
                        <hr>
                        <input type="text" placeholder="Area Of Expertise" input_ref="{{input_ref}}">
                        <input type="text" placeholder="Area Of Expertise" input_ref="{{input_ref}}">
                        <input type="text" placeholder="Area Of Expertise" input_ref="{{input_ref}}">
                        <button block_id_ref="{{block_id_ref}}">Delete Section</button>
                    </div>

                </div>
            </div>

            
            `,
            'cv':
            `
            <div class="col-md-3" cv_block_id="{{cv_block_id}}">
                <ul>
                    <li cv_ref="{{cv_ref}}">Area of Expertise</li>
                    <li cv_ref="{{cv_ref}}">Area of Expertise</li>
                    <li cv_ref="{{cv_ref}}">Area of Expertise</li>
                </ul>
            </div>
            `
        },
        //Professional Experience
        'pe':{
            'form':
            `

            <div class="accordion-item" block_id="{{block_id}}">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" data-bs-toggle="collapse"
                        data-bs-target="#content-accordion-3">
                    </button>
                </h2>
                <div id="content-accordion-3" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                    
                    <div id="xxx" class="cv-blockbox" >
                        <hr>
                        <input type="text" placeholder="Position/Title" input_ref="{{input_ref}}">
                        <input type="text" placeholder="Duration" input_ref="{{input_ref}}">
                        <input type="text" placeholder="Company name" input_ref="{{input_ref}}">
                        <textarea placeholder="Your responsibilities ..." input_ref="{{input_ref}}"></textarea>
                        <input type="text" placeholder="Achievements" input_ref="{{input_ref}}">
                        <div></div>
                        <button add_block="{{add_block}}" catalogue="0" target="ul">+ Add achievements</button>
                        <button block_id_ref="{{block_id_ref}}">Delete Section</button>
                    </div>
                    
                </div>
            </div>

            `,
            'cv':
            `        
            <div id="professional_experience" class="divs" cv_section="3">
                <div cv_block_id="{{cv_block_id}}">
                    <div class="date-bar">
                        <h2 cv_ref="{{cv_ref}}">Position / Title</h2>
                        <h2 class="date" cv_ref="{{cv_ref}}">Duration</h2>
                    </div>
                    <p cv_ref="{{cv_ref}}">Company name</p>
                    <p cv_ref="{{cv_ref}}">Description of the job role and responsibilities</p>
                    <ul>
                        <li cv_ref="{{cv_ref}}">Achievements</li>
                    </ul>
                </div>
            </div>
            `
        },
        //Education
        'edu':{
            'form':
            `

            <div class="accordion-item"  block_id="{{block_id}}">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" data-bs-toggle="collapse"
                        data-bs-target="#content-accordion-4">
                    </button>
                </h2>
                <div id="content-accordion-4" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                    
                    <div id="xxx" class="cv-blockbox">
                        <hr>
                        <input type="text" placeholder="Degree" input_ref="{{input_ref}}">
                        <input type="text" placeholder="School/College/University name" input_ref="{{input_ref}}">
                        <input type="text" placeholder="Achievements/extra-curricular activities." input_ref="{{input_ref}}">
                        <div></div>
                        <button add_block="{{add_block}}" catalogue="0" target="ul">+ Add achievements</button>
                        <button block_id_ref="{{block_id_ref}}">Delete Section</button>
                    </div>
                
                </div>
            </div>

            
            `,
            'cv':
            `        
            <div cv_block_id="{{cv_block_id}}">
                <h2 cv_ref="{{cv_ref}}">Degree name</h2>
                <p cv_ref="{{cv_ref}}">Institute Name</p>
                <ul>
                    <li cv_ref="{{cv_ref}}">Additional details about your courses and extra-curricular activities.</li>
                </ul>
            </div>
            `
        },
        // Certification
        'ce':{
            'form':
            `

            <div class="accordion-item"  block_id="{{block_id}}">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" data-bs-toggle="collapse"
                        data-bs-target="#content-accordion-5">
                    </button>
                </h2>
                <div id="content-accordion-5" class="accordion-collapse collapse" data-bs-parent="#faqlist">

                    <div id="xxx" class="cv-blockbox">
                        <hr>
                        <input type="text" placeholder="Certificate name/Title" input_ref="{{input_ref}}">
                        <input type="text" placeholder="Duration" input_ref="{{input_ref}}">
                        <textarea placeholder="Description" input_ref="{{input_ref}}"></textarea>
                        <button block_id_ref="{{block_id_ref}}">Delete Section</button>
                    </div>
                    
                </div>
            </div>

            
            `,
            'cv':
            `        
            <div cv_block_id="{{cv_block_id}}">
                <div class="date-bar">
                    <h2 cv_ref="{{cv_ref}}" state="default">Certification title</h2>
                    <h2 class="date" cv_ref="{{cv_ref}}">date</h2>
                </div>
                <p cv_ref="{{cv_ref}}">Short description of the certification</p>
            </div>
            `
        },
        'int':{
            'form':
            `

            <div class="accordion-item"  block_id="{{block_id}}">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" data-bs-toggle="collapse"
                    data-bs-target="#content-accordion-6">
                </button>
            </h2>
            <div id="content-accordion-6" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                
                <div id="xxx" class="cv-flexbox">
                    <input type="text" placeholder="Interests" input_ref="{{input_ref}}">
                    <button block_id_ref="{{block_id_ref}}">
                    </button>
                </div>
                
            </div>
            </div>

            
            `,
            'cv':
            `        
            <li cv_ref="0021">Interest 001</li>
            `
        },
    }

document.addEventListener('DOMContentLoaded', (event) => {


(function() {
    try{
        let user_pregress = localStorage.getItem('fulldoc')
        if (user_pregress){
            let target = document.getElementById('fulldoc');
            user_pregress =  loader(user_pregress);
            target.innerHTML=''
            
        
            // Append each child of the temporary div to the target element
       
            target.appendChild(user_pregress);
           
            console.log(user_pregress)
            console.log('slide changed')
        }
        else{
            console.log('no user_pregress')
        }
    }
    catch(err){
        console.log('shi dude',err)
        return 0;
    }
})();

document.querySelector('#cv-form').addEventListener('input', function(event) {
    let input       = event.target;
    if (input.matches('input[input_ref],textarea[input_ref]')) {
        writetext(input)
    }
});
document.querySelector('#fulldoc').addEventListener('click', function(event) {
    let button      = event.target;
    if (button.matches('button[block_id_ref]')) {
        deleteElement(button)
    }
    else if (button.matches('button[add_id]')) {
        addSection(button)
    }
    else if (button.matches('button[add_block]')) {
        addBlock(button);
    }
    else if (button.id=='save') {
        save_user_prog();
    }
    else if (button.id=='download') {
        getkey(function(key) {
            // Invoke the convert function with the retrieved key
            convert(key);
        });
    }
});

//==============================================================================


function writetext(input){
    let input_ref   = input.getAttribute('input_ref'); 
    let cv_ref      = document.querySelector(`[cv_ref="${input_ref}"]`);
    if (input.value===''){
        cv_ref.setAttribute('state','default');
        cv_ref.textContent = input.placeholder;
    }
    else{
        cv_ref.setAttribute('state','edited');
        cv_ref.textContent = input.value
    }
}

function addSection(button){
    let section_id      = button.getAttribute('add_id')
    let cvdestination   = document.querySelector(`[cv_section="${section_id}"]`)
    let formdestination = document.querySelector(`[block_id="${section_id}"]`)
    let formdestination_target = button.getAttribute('target')
    let limit           = button.getAttribute('limit');
    let current         = button.getAttribute('current');
    let fragment        = button.getAttribute('fragment')
    
    block_id = generateUUID();

    let formDirect  = sections_catalogue[fragment].form;
    let cvDirect    = sections_catalogue[fragment].cv;  

    let numInputs = (formDirect.match(/{{input_ref}}/g) || []).length;

    for (let i = 0; i < numInputs; i++) {
        let reference = generateUUID();
        formDirect  = formDirect.replace('{{input_ref}}', reference);
        cvDirect    = cvDirect.replace('{{cv_ref}}', reference);
    }    

    formDirect = replacePlaceholder(formDirect, 'block_id', block_id);
    formDirect = replacePlaceholder(formDirect, 'block_id_ref', block_id);
    formDirect = replacePlaceholder(formDirect, 'add_block', block_id);   

    
    cvDirect = cvDirect.replace('{{cv_block_id}}', block_id);
    
    
    if( formdestination_target  ){
        if(current < limit){
            button.setAttribute('current',parseInt(current)+1)
        }
        else{
            return 0 ;
        }
    }
    console.log('button id : ',section_id)

    if(formdestination_target){
        console.log('formdestination_target : ',formdestination_target)

        let interdiv = formdestination.querySelector('[target]')
        interdiv.insertAdjacentHTML('beforeend', formDirect)

    }
    else{
        formdestination.insertAdjacentHTML('beforeend', formDirect);
    }
    cvdestination.querySelector('[target]').insertAdjacentHTML('beforeend', cvDirect);

};

function addBlock(button){
    let block_id    = button.getAttribute('add_block');
    let catalogue   = button.getAttribute('catalogue');
    let target      = button.getAttribute('target');
    
    let formDirect  = sections_catalogue[catalogue].form;
    
    let cvDirect    = sections_catalogue[catalogue].cv;
    
    let uuid        = generateUUID()
    let reference   = generateUUID()

    formDirect = formDirect.replace('{{block_id}}', uuid).replace('{{block_id_ref}}', uuid).replace('{{input_ref}}', reference);
    cvDirect = cvDirect.replace('{{cv_block_id}}', uuid).replace('{{cv_ref}}', reference);

    let cv = document.querySelector(`[cv_block_id="${block_id}"] ${target}`);

    // Create a new div element
    let div = document.createElement('div');
    div.setAttribute('cv_block_id',uuid)
    // Set the innerHTML of the div to cvDirect
    div.innerHTML = cvDirect;
    document.querySelector(`[block_id="${block_id}"] div `).insertAdjacentHTML('beforeend', formDirect)
    // Append the first child of the div (which is the new HTML element) to cv
    console.log(cv)
    console.log()
    cv.appendChild(div);
};

function deleteElement(button){
    let block_id_ref = button.getAttribute('block_id_ref');
    let cv_block     = document.querySelector(`[cv_block_id="${block_id_ref}"]`);
    cv_block.remove();
    let form_block   = document.querySelector(`[block_id="${block_id_ref}"]`);
    form_block.remove();
    if (button.getAttribute('add_ref')){
        let add_button_reference = button.getAttribute('add_ref')
        let add_button = document.getElementById(add_button_reference)
        let current = parseInt(add_button.getAttribute('current'));
              
        add_button.setAttribute('current',parseInt(add_button.getAttribute('current'))-1)
    }
}

//==============================================================================




function replacePlaceholder(formDirect, placeholder, value) {
    return formDirect.replace(new RegExp(`{{${placeholder}}}`, 'g'), value);
}

// Usage









function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
});