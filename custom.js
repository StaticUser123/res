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
