import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function AccordianSurface() {
    return (
        <>
            <Accordion>
                <AccordionSummary
                    id='panel1-header'
                    aria-controls='panel1-content.'
                    expandIcon={<ExpandMoreIcon/>}
                >
                    <Typography>Content 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit ad vel quam perferendis harum ducimus architecto neque eveniet sit. Omnis consequuntur ea facilis, alias dolore assumenda dignissimos molestiae esse sed.
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default AccordianSurface
