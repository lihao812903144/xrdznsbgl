package com.xrd.znsbgl.controller;

import com.xrd.znsbgl.entity.Admin;
import com.xrd.znsbgl.entity.Equipment;
import com.xrd.znsbgl.mapper.EquipmentMapper;
import com.xrd.znsbgl.service.EquipmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@RestController
public class EquipmentController {

    @Autowired
    EquipmentService equipmentService;

    @GetMapping("/addEquipment")
    public Map<String,Object> addEquipment(Equipment equipment) {
        Map<String, Object> map = new HashMap<String, Object>();
        int i = equipmentService.addEquipment(equipment);
            map.put("code",i);
            map.put("msg","插入成功");
        return map;
    }
    @GetMapping("/getAllEquipment")
    public Map<String,Object> getAllEquipment() {
        Map<String, Object> map = new HashMap<String, Object>();
        ArrayList<Equipment> al = equipmentService.getAllEquipment();
        map.put("data",al);
        map.put("code",1);
        map.put("msg","查询成功");
        return map;
    }
    @GetMapping("/getEquipmentById")
    public Map<String,Object> getEquipmentById(Integer id) {
        Map<String, Object> map = new HashMap<String, Object>();
        Equipment equipment = equipmentService.getEquipmentById(id);
        map.put("data",equipment);
        map.put("code",1);
        map.put("msg","查询成功");
        return map;
    }
    @GetMapping("/updategetEquipmentById")
    public Map<String,Object> updategetEquipmentById(Equipment equipment) {
        Map<String, Object> map = new HashMap<String, Object>();
        int i  = equipmentService.updategetEquipmentById(equipment);
        map.put("code",i);
        map.put("msg","修改成功");
        return map;
    }
    @GetMapping("/deleteEquipmentById")
    public Map<String,Object> deleteEquipmentById(Integer id) {
        Map<String, Object> map = new HashMap<String, Object>();
        int i  = equipmentService.deleteEquipmentById(id);
        map.put("code",i);
        map.put("msg","删除成功");
        return map;
    }
}
