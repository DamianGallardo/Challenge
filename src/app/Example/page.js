"use client"
import React ,{useState} from 'react';
import { Sections } from 'keski_lib_catalog';


export default function Example() {

  const skeletor = [
    {
      "id": 15,
      "component": {
        "id": 15,
        "bg_image": {
          "id": 17,
          "url": "https://wozapps-develop.s3.us-east-2.amazonaws.com/gerry/resources/landing/bf3a4309-6732-4495-81ac-8b09f53be47f.png",
          "type": 1,
          "date_created": "2023-07-12T20:33:53.710128-05:00"
        },
        "subcomponent": [
          {
            "id": 73,
            "image": null,
            "title": "KeskiNube es una empresa de desarrollo de software que ofrece soluciones de software personalizadas para empresas de todo el mundo. Nuestro equipo de desarrolladores de software altamente experimentado y experto tiene el conocimiento y la experiencia para crear aplicaciones robustas, confiables y seguras para una variedad de industrias. Ofrecemos una amplia gama de servicios para satisfacer las necesidades de su empresa, incluido el desarrollo web, el desarrollo de aplicaciones móviles, el diseño de bases de datos y las soluciones de software empresarial. Ya sea que su negocio sea grande o pequeño, nos esforzamos por proporcionar las mejores soluciones de software para mejorar sus operaciones comerciales y su rentabilidad.",
            "subtitle": null,
            "description": "Bienvenidos",
            "text_color": "#ffffff",
            "button_title": "Compar",
            "button_action": "/store?page=1&category=1",
            "link": 3,
            "date_created": "2023-07-28T20:13:14.685538-05:00",
            "component": 15
          }
        ],
        "bg_image_overlay_alpha_css": 0.5,
        "type": 0,
        "layout": 0,
        "bg_type": 3,
        "bg_color1": "#2ecd23",
        "bg_color2": "#cc33e1",
        "bg_gradiant_orientation": "bottom",
        "bg_image_overlay": true,
        "bg_image_overlay_color": "#ec4646",
        "bg_image_overlay_alpha": 50,
        "title": "",
        "justify_content": "left",
        "date_created": "2023-06-06T19:37:02.415389-05:00"
      },
      "index_by": 1,
      "type": 0,
      "name": "Banner",
      "view": 2,
      "date_created": "2023-06-06T19:37:02.426033-05:00"
    },
    {
      "id": 11,
      "component": {
        "id": 11,
        "bg_image": {
          "id": 9,
          "url": "https://wozapps-develop.s3.us-east-2.amazonaws.com/gerry/resources/landing/ed899115-3b32-4dfc-bc2f-98dfd76f8dd4.png",
          "type": 1,
          "date_created": "2023-05-31T13:52:59.370515-05:00"
        },
        "subcomponent": [
          {
            "id": 27,
            "image": {
              "id": 26,
              "url": "https://wozapps-develop.s3.us-east-2.amazonaws.com/gerry/resources/landing/fe4d39fc-dd6f-42cb-aec7-09b0037204a1.png",
              "type": 1,
              "date_created": "2023-07-19T22:47:14.411264-05:00"
            },
            "title": "Calidad y experiencia",
            "subtitle": null,
            "description": "Nuestro equipo de desarrolladores de software altamente experimentado y experto tiene el conocimiento y la experiencia para crear aplicaciones robustas, confiables y seguras para una variedad de industrias. Ofrecemos una amplia gama de servicios para satisfacer las necesidades de su empresa, incluido el desarrollo web, el desarrollo de aplicaciones móviles, el diseño de bases de datos y las soluciones de software empresarial. Ya sea que su negocio sea grande o pequeño, nos esforzamos por proporcionar las mejores soluciones de software para mejorar sus operaciones comerciales y su rentabilidad.",
            "text_color": "#000000",
            "button_title": "Más información",
            "button_action": "/product/1",
            "link": 2,
            "date_created": "2023-06-01T19:27:53.271188-05:00",
            "component": 11
          }
        ],
        "bg_image_overlay_alpha_css": 0.5,
        "type": 0,
        "layout": 1,
        "bg_type": 1,
        "bg_color1": "#ffffff",
        "bg_color2": "#000000",
        "bg_gradiant_orientation": "left",
        "bg_image_overlay": false,
        "bg_image_overlay_color": "#000000",
        "bg_image_overlay_alpha": 50,
        "title": null,
        "justify_content": "left",
        "date_created": "2023-05-29T20:39:15.263399-05:00"
      },
      "index_by": 2,
      "type": 1,
      "name": "Texto + Imágenes",
      "view": 2,
      "date_created": "2023-05-29T20:39:15.271568-05:00"
    },
    {
      "id": 18,
      "component": {
        "id": 18,
        "bg_image": {
          "id": 15,
          "url": "https://wozapps-develop.s3.us-east-2.amazonaws.com/gerry/resources/landing/58f384ed-017e-479f-8c55-c53ea25d9756.png",
          "type": 1,
          "date_created": "2023-06-10T19:09:26.405001-05:00"
        },
        "subcomponent": [
          {
            "id": 50,
            "image": {
              "id": 2,
              "url": "https://wozapps-develop.s3.us-east-2.amazonaws.com/gerry/resources/landing/e36380b9-d621-46d9-9216-74aa77681e43.jpeg",
              "type": 1,
              "date_created": "2023-05-20T00:12:51.932024-05:00"
            },
            "title": null,
            "subtitle": "- Juan José, Director de Desarrollo de Software, México.",
            "description": "KeskiNube ha sido una maravillosa colaboración para nuestra empresa. El equipo de desarrolladores nos ayudó a mejorar la experiencia de nuestros usuarios a través de soluciones innovadoras. ¡Un equipo increíblemente confiable y de calidad!",
            "text_color": "#000000",
            "button_title": null,
            "button_action": null,
            "link": 1,
            "date_created": "2023-07-05T18:24:45.601507-05:00",
            "component": 18
          },
          {
            "id": 51,
            "image": {
              "id": 6,
              "url": "https://wozapps-develop.s3.us-east-2.amazonaws.com/gerry/resources/landing/bbb84144-02cd-4cf8-a1be-21ba47e7c4fa.jpeg",
              "type": 1,
              "date_created": "2023-05-23T21:24:26.622720-05:00"
            },
            "title": null,
            "subtitle": "- Nate Smith",
            "description": "KeskiNube's software development services have provided us with innovative solutions that have increased our productivity. We've been impressed by the quality of their work and their professionalism.",
            "text_color": "#000000",
            "button_title": null,
            "button_action": null,
            "link": 1,
            "date_created": "2023-07-05T18:25:13.646035-05:00",
            "component": 18
          },
          {
            "id": 52,
            "image": {
              "id": 9,
              "url": "https://wozapps-develop.s3.us-east-2.amazonaws.com/gerry/resources/landing/ed899115-3b32-4dfc-bc2f-98dfd76f8dd4.png",
              "type": 1,
              "date_created": "2023-05-31T13:52:59.370515-05:00"
            },
            "title": null,
            "subtitle": "- Matt Jones",
            "description": "KeskiNube has been a great partner for our software development projects. They have always been responsive, professional and deliver high-quality work.",
            "text_color": "#000000",
            "button_title": null,
            "button_action": null,
            "link": 1,
            "date_created": "2023-07-05T18:25:27.502389-05:00",
            "component": 18
          }
        ],
        "bg_image_overlay_alpha_css": 0.5,
        "type": 1,
        "layout": 0,
        "bg_type": 1,
        "bg_color1": "#ebebeb",
        "bg_color2": "#ffffff",
        "bg_gradiant_orientation": "left",
        "bg_image_overlay": false,
        "bg_image_overlay_color": "#000000",
        "bg_image_overlay_alpha": 50,
        "title": null,
        "justify_content": "right",
        "date_created": "2023-06-10T19:13:24.096022-05:00"
      },
      "index_by": 3,
      "type": 2,
      "name": "Citas/Testimonios",
      "view": 2,
      "date_created": "2023-06-10T19:13:24.105045-05:00"
    },
    {
      "id": 25,
      "component": {
        "id": 25,
        "bg_image": null,
        "subcomponent": [
          {
            "id": 42,
            "image": {
              "id": 10,
              "url": "https://wozapps-develop.s3.us-east-2.amazonaws.com/gerry/resources/landing/3380a752-3de0-41e2-8e68-8e2dc331c75f.jpeg",
              "type": 1,
              "date_created": "2023-05-31T18:52:03.849186-05:00"
            },
            "title": "Galeria",
            "subtitle": null,
            "description": null,
            "text_color": "#000000",
            "button_title": null,
            "button_action": null,
            "link": null,
            "date_created": "2023-06-30T19:12:25.046407-05:00",
            "component": 25
          },
          {
            "id": 43,
            "image": {
              "id": 3,
              "url": "https://wozapps-develop.s3.us-east-2.amazonaws.com/gerry/resources/landing/2b60deec-4550-4f7e-8bff-6de3892ad6b6.png",
              "type": 1,
              "date_created": "2023-05-23T19:40:02.815044-05:00"
            },
            "title": "Titilo",
            "subtitle": null,
            "description": null,
            "text_color": "#000000",
            "button_title": null,
            "button_action": null,
            "link": null,
            "date_created": "2023-06-30T19:12:40.940521-05:00",
            "component": 25
          },
          {
            "id": 45,
            "image": {
              "id": 4,
              "url": "https://wozapps-develop.s3.us-east-2.amazonaws.com/gerry/resources/landing/6d2db942-77f8-47cd-bf09-d7044fe5b5d3.jpeg",
              "type": 1,
              "date_created": "2023-05-23T19:42:04.369142-05:00"
            },
            "title": "Titulo",
            "subtitle": null,
            "description": null,
            "text_color": "#000000",
            "button_title": null,
            "button_action": null,
            "link": null,
            "date_created": "2023-07-01T19:07:58.275109-05:00",
            "component": 25
          },
          {
            "id": 56,
            "image": {
              "id": 8,
              "url": "https://wozapps-develop.s3.us-east-2.amazonaws.com/gerry/resources/landing/674ace85-dc7f-4e3a-b843-67dd27996495.png",
              "type": 1,
              "date_created": "2023-05-30T16:06:10.668910-05:00"
            },
            "title": "Titulo",
            "subtitle": null,
            "description": null,
            "text_color": "#000000",
            "button_title": null,
            "button_action": null,
            "link": null,
            "date_created": "2023-07-08T12:05:57.470822-05:00",
            "component": 25
          },
          {
            "id": 63,
            "image": {
              "id": 17,
              "url": "https://wozapps-develop.s3.us-east-2.amazonaws.com/gerry/resources/landing/bf3a4309-6732-4495-81ac-8b09f53be47f.png",
              "type": 1,
              "date_created": "2023-07-12T20:33:53.710128-05:00"
            },
            "title": "Memo",
            "subtitle": null,
            "description": null,
            "text_color": "#000000",
            "button_title": null,
            "button_action": null,
            "link": 1,
            "date_created": "2023-07-12T20:49:47.187234-05:00",
            "component": 25
          },
          {
            "id": 64,
            "image": {
              "id": 12,
              "url": "https://wozapps-develop.s3.us-east-2.amazonaws.com/gerry/resources/landing/36303195-af1b-4457-804a-506d8d2c190e.png",
              "type": 1,
              "date_created": "2023-06-07T18:26:01.737427-05:00"
            },
            "title": "IVA",
            "subtitle": null,
            "description": null,
            "text_color": "#000000",
            "button_title": null,
            "button_action": null,
            "link": 1,
            "date_created": "2023-07-12T20:50:06.745754-05:00",
            "component": 25
          },
          {
            "id": 65,
            "image": {
              "id": 17,
              "url": "https://wozapps-develop.s3.us-east-2.amazonaws.com/gerry/resources/landing/bf3a4309-6732-4495-81ac-8b09f53be47f.png",
              "type": 1,
              "date_created": "2023-07-12T20:33:53.710128-05:00"
            },
            "title": "ggg",
            "subtitle": null,
            "description": null,
            "text_color": "#000000",
            "button_title": null,
            "button_action": "",
            "link": 1,
            "date_created": "2023-07-19T19:55:02.647451-05:00",
            "component": 25
          },
          {
            "id": 66,
            "image": {
              "id": 18,
              "url": "https://wozapps-develop.s3.us-east-2.amazonaws.com/gerry/resources/landing/1f7823d1-5a9c-4e92-82d1-006ba01af607.png",
              "type": 1,
              "date_created": "2023-07-19T20:52:54.191242-05:00"
            },
            "title": "tes",
            "subtitle": null,
            "description": null,
            "text_color": "#000000",
            "button_title": null,
            "button_action": null,
            "link": 1,
            "date_created": "2023-07-19T20:54:27.312921-05:00",
            "component": 25
          },
          {
            "id": 72,
            "image": {
              "id": 27,
              "url": "https://wozapps-develop.s3.us-east-2.amazonaws.com/gerry/resources/landing/b6f00276-a117-4bb5-8e80-61afcb9578f9.png",
              "type": 3,
              "date_created": "2023-07-19T23:27:17.615219-05:00"
            },
            "title": "IVA",
            "subtitle": null,
            "description": null,
            "text_color": "#000000",
            "button_title": null,
            "button_action": "",
            "link": 1,
            "date_created": "2023-07-19T23:27:24.239533-05:00",
            "component": 25
          }
        ],
        "bg_image_overlay_alpha_css": 0.5,
        "type": 1,
        "layout": 0,
        "bg_type": 1,
        "bg_color1": null,
        "bg_color2": null,
        "bg_gradiant_orientation": "left",
        "bg_image_overlay": false,
        "bg_image_overlay_color": "#000000",
        "bg_image_overlay_alpha": 50,
        "title": "GALERIA",
        "justify_content": "center",
        "date_created": "2023-06-30T19:12:05.333574-05:00"
      },
      "index_by": 4,
      "type": 3,
      "name": "Galeria",
      "view": 2,
      "date_created": "2023-06-30T19:12:05.353902-05:00"
    },
    {
      "id": 29,
      "component": {
        "id": 29,
        "bg_image": null,
        "subcomponent": [
          {
            "id": 61,
            "image": {
              "id": 13,
              "url": "https://wozapps-develop.s3.us-east-2.amazonaws.com/gerry/resources/landing/82098d84-1b54-4d0e-b1c1-073f7273f441.png",
              "type": 1,
              "date_created": "2023-06-07T18:28:26.765504-05:00"
            },
            "title": "noc",
            "subtitle": null,
            "description": "Hola a todos! Soy el propietario de KeskiNube, una empresa de desarrollo de software mexicana. Somos una empresa de tecnología enfocada en el desarrollo de soluciones de software para empresas de todo el mundo. Nuestro objetivo es ofrecer soluciones de clase mundial para ayudar a nuestros clientes a mejorar sus negocios. Nuestro equipo de desarrollo de software está compuesto por expertos en la industria de la tecnología y el desarrollo de software. Estamos comprometidos a proporcionar la mejor experiencia para nuestros clientes, desarrollando productos que se adapten a sus necesidades. También ofrecemos servicios de soporte y mantenimiento para ayudar a nuestros clientes a mantener sus sistemas en funcionamiento correctamente.",
            "text_color": "#000000",
            "button_title": "Catalago que tiene de malo ?",
            "button_action": "/product/1",
            "link": 2,
            "date_created": "2023-07-10T21:59:02.143659-05:00",
            "component": 29
          }
        ],
        "bg_image_overlay_alpha_css": 0.5,
        "type": 0,
        "layout": 0,
        "bg_type": 1,
        "bg_color1": "#ffffff",
        "bg_color2": null,
        "bg_gradiant_orientation": "left",
        "bg_image_overlay": false,
        "bg_image_overlay_color": "#000000",
        "bg_image_overlay_alpha": 50,
        "title": null,
        "justify_content": "left",
        "date_created": "2023-07-10T21:56:57.860770-05:00"
      },
      "index_by": 5,
      "type": 1,
      "name": "Texto + Imágenes",
      "view": 2,
      "date_created": "2023-07-10T21:56:57.869579-05:00"
    },
    ]


  const [components, setComponents] = React.useState(skeletor);

  const SECA = new Sections();

  // const ComponentRender = SECA.getLayoutsFromSections(0);


  return (

    <div>

      {skeletor.map((element, index)=>(
          
          <div key={index}>
            {SECA.sections[element.type].component(element)}
          </div>

      )
        )}

    </div>

  );
}