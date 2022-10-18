using Microsoft.AspNetCore.Mvc;
using Api.Data;
using Api.Response;
using Api.Request;
using Microsoft.EntityFrameworkCore;
using Api.Models;

namespace Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BarrioController : ControllerBase
{
// private readonly pintureriaContext _contex;
// public BarrioController(pintureriaContext context){
//     _contex = context;
    
// }
 [HttpGet]

// public async Task<ActionResult<List<BarrioModel>>> Get(){

//     var barrio = await _contex.Barrios.Select(x=>
//             new BarrioModel{
//                 IdBarrios = x.IdBarrios,
//              Descripcion = x.Descripcion 
//             }
//     ).ToListAsync();
//     return Ok(barrio);
// }

 public async Task<ActionResult<List<BarrioModel>>> Get()
    {
          using(pintureriaContext db = new pintureriaContext()){
              var barrio = await db.Barrios.Select(x =>
            new BarrioModel
           {
             IdBarrios = x.IdBarrios,
                Descripcion = x.Descripcion
            }).ToListAsync();
        return Ok(barrio);}    
        
         }




    // [HttpGet]
    // public async Task <ActionResult> GetBarrios()
    // {
    //     Respuesta oRespuesta = new Respuesta();
    //     try
    //     {
    //             using(pintureriaContext db = new pintureriaContext()){
    //              var lst = await db.Barrios.ToListAsync();
    //              oRespuesta.Exito = 1;
    //              oRespuesta.Data = lst;
                
    //     }    
    //     }
    //     catch (Exception ex)
    //     {
    //         oRespuesta.Mensaje = ex.Message;
    //     }
    //   return Ok(oRespuesta);
    // }

    [HttpPost]
    public ActionResult AddBarrio(BarrioRequest oRequest){
        Respuesta oRespuesta = new Respuesta();
        try
        {
            using(pintureriaContext db = new pintureriaContext()){
                  Barrio oBarrio = new Barrio();
                  oBarrio.Descripcion = oRequest.Descripcion;
                  db.Barrios.Add(oBarrio);
                  db.SaveChanges();
                  oRespuesta.Exito = 1;
            }
          
        }
        catch (Exception ex)
        {
            oRespuesta.Mensaje = ex.Message;
           
        }
        return Ok(oRequest);
    }
    [HttpPut]
    public ActionResult EditBarrio(BarrioRequest oRequest){
        Respuesta oRespuesta = new Respuesta();
        try
        {
            using(pintureriaContext db = new pintureriaContext()){
                  Barrio oBarrio = db.Barrios.Find(oRequest.Id);
                  oBarrio.Descripcion = oRequest.Descripcion;
                  db.Barrios.Add(oBarrio);
                  db.Entry(oBarrio).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                  db.SaveChanges();
                  oRespuesta.Exito = 1;
            }
          
        }
        catch (Exception ex)
        {
            oRespuesta.Mensaje = ex.Message;
           
        }
        return Ok(oRequest);
    }
}
